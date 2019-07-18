const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');
const { lstatSync, readdirSync } = fs;
const pdf = require('html-pdf');
const Handlebars = require('handlebars');
const { join } = require('path');
require('./handlebars-utils');

const app = express();
const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const getHtml = name => {
  try {
    const hbTemplate = fs.readFileSync(`./templates/${name}/${name}.html`, 'utf8');
    const static = JSON.parse(fs.readFileSync(`./templates/${name}/${name}.json`));
    const dynamic = JSON.parse(fs.readFileSync(`./templates/${name}/${name}.dynamic.json`));
    // data.data.dynamic = dynamic;
    const data = {
      data: {
        static: {
          ...static.data,
        },
        dynamic,
      }
    }
    console.log('data to be inserted: ', data);
    const template = Handlebars.compile(hbTemplate);
    console.log('compiled template: ', template(data));
    return template(data);
  } catch(e) {
    console.log(e);
    return '';
  }
}

app.use('/templates', express.static('templates'));

app.get('/pdf', (req, res, next) => {

  const templates = getDirectories('./templates/').map(d => d.split('/')[1]);

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <h1>Templates</h1>
      <ul>
      ${templates.map(template => `
        <li>
          <h4>${template}</h4>
          <a href="/pdf/html-pdf/${template}">html-pdf</a>
          <a href="/pdf/puppeteer/${template}">puppeteer</a>
          <a href="/pdf/html/${template}">html</a>
        </li>
      `)}
      </ul>
    </body>
    </html>
  `)
});

app.get('/pdf/html-pdf/:name', (req, res, next) => {
  const { name } = req.params;

  try {
    const html = getHtml(name);
    pdf.create(html, {
      format: 'A4',
      border: {
        top: '1cm',
        right: '1cm',
        bottom: '0',
        left: '1cm'
      },
      footer: {
        height: '1.5cm',
      }
    }).toBuffer(function(err, buffer){
      console.log('converted with html-pdf: ' + name);
      res.type('application/pdf');
      res.send(buffer);
    });
  } catch(err) {
    console.log('Error: ', err);
    res.status(404);
    res.send('Error');
    next();
  }
});

app.get('/pdf/puppeteer/:name', async (req, res, next) => {
  const { name } = req.params;

  try {
    const html = getHtml(name);
    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    page.setContent(html);
    const buffer = await page.pdf({
      format: 'A4',
      margin: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    })
    console.log('converted with html-pdf: ' + name);
    res.type('application/pdf');
    res.send(buffer);
  } catch(err) {
    console.log('Error: ', err);
    res.status(404);
    res.send('Error');
    next();
  }
});

app.get('/pdf/html/:name', (req, res, next) => {
  const { name } = req.params;

  try {
    const html = getHtml(name);

    res.type('html');
    res.send(html);

  } catch(err) {
    console.log('Error: ', err);
    res.status(404);
    res.send('Error');
    next();
  }
});


app.listen(3001);
console.log('----------------------------------------')
console.log('Service started at http://localhost:3001');
console.log('----------------------------------------\n')
