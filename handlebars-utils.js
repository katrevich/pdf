/*eslint-disable */
const Handlebars = require('handlebars')
Handlebars.registerPartial('footer',
    '<div class="footer font-xs">' +
    '<div>' +
    '<div class="inline-block left">{{ staticData.footer.title }} {{dynamicData.candidateShortName}}</div>' +
    '<div class="inline-block right">{{pageNumber}}</div>' +
    '<div class="footerSecondLineP1 font-weight-md clear-both"> {{ staticData.footer.subTitle }}</div>' +
    '</div>' +
    '</div>'
);

Handlebars.registerPartial('header',
    '<div class="top-header bg-primary">' +
    '<div class="logo-container-end inline-block">' +
    '<svg class="harver-logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' +
    'x="0px" y="0px" viewBox="0 0 286 83.1" style="enable-background:new 0 0 286 83.1;" xml:space="preserve">' +
    '<style type="text/css">' +
    '.st0 {' +
    'fill: white;' +
    '}' +
    '</style>' +
    '<g>' +
    '<g>' +
    '<path class="st0" d="M30.2,29.7c-5.2,0-12.3,1.1-17.3,2.5c0,0,1.3-27.4-12.8-32.2c3.6,9.3,2.9,28.8,2.9,29.8v49.6' +
    'c0,0.9,0.7,1.4,1.5,1.4h8c0.9,0,1.4-0.6,1.4-1.4v-40c0,0,7.3-1.9,14.5-1.9c5.8,0,7.7,2.1,7.7,7.4v34.5c0,0.9,0.6,1.4,1.5,1.4h7.9' +
    'c0.9,0,1.4-0.6,1.4-1.4v-36C47,33,41.3,29.7,30.2,29.7z M96,32.3c-3-1.6-7.5-2.6-14.3-2.6c-9.4,0-18,2.2-20.7,3.1' +
    'c-0.5,0.2-1.1,0.5-1.1,1.3v0.3l1.2,5.3c0.1,0.6,0.6,0.8,1,0.8c0.3,0,0.5-0.1,0.7-0.1c3.3-0.8,10.1-2.7,17-2.7c3.8,0,6.3,0.3,7.9,1' +
    'c2.8,1.1,3,3.2,3,6.1v3.5l-17.5,2.9c-8.5,1.4-16,2.5-16,14.9c0,15.2,13.2,16,22.8,16c5.3,0,9.8-0.6,13-1.3' +
    'c6.6-1.5,8.6-2.9,8.6-9.9V44.6C101.4,39.5,101,35,96,32.3z M90.6,73.2c-2.8,1-6.4,1.5-10.4,1.5c-5.2,0-11.9-0.6-11.9-8.7' +
    'c0-6.7,4-7.1,8.2-7.8l14.1-2.3V73.2z M140,30c-0.9-0.2-0.7-0.2-2.2-0.2h-1.6c-5.2,0.1-12.1,1.1-16.3,2.7c-4.1,1.4-5.9,2.6-5.9,6.5' +
    'v40.5c0,0.9,1.3,1.4,1.5,1.4h8c0.9,0,1.4-0.6,1.4-1.4V39.8c3.7-0.9,8.8-1.5,14.7-1.5c1.2,0,1.3-0.7,1.3-1.4v-5.4' +
    'C141.1,30.4,140.4,30.1,140,30z M191.9,31h-8.4c-1.1,0-1.6,0.5-1.9,1.4l-10.4,41.4h-2.5L157,32.4c-0.3-1-0.7-1.4-1.8-1.4H147' +
    'c-0.8,0-1.3,0.7-1.3,1.4c0,0.2,0.1,0.4,0.1,0.6l14.8,46.4c0.3,0.9,1,1.5,1.9,1.5h14.6c1,0,1.6-0.6,1.9-1.5l14.2-46.6' +
    'c0-0.1,0.1-0.3,0.1-0.4C193.4,31.5,192.7,31,191.9,31z M222.5,29.7c-18.9,0-23.3,9.1-23.3,26.3c0,18.2,6.7,26,25.6,26' +
    'c7.1,0,13.6-1.5,17.1-2.9c0.6-0.3,1.1-0.7,1.1-1.3c0-0.1,0-0.3-0.1-0.4l-1.2-4.4c-0.3-0.9-0.7-1.1-1.3-1.1c-0.1,0-0.3,0-0.5,0.1' +
    'c-3.6,1-7.7,2.3-13.8,2.3c-5.8,0-9.7-0.9-12.4-3.4c-2.3-2.2-3.5-4.8-3.6-9.5h33.5c1.1,0,1.6-1,1.6-1.8c0.1-1.4,0.1-3.3,0.1-4.6' +
    'c0-7.4-0.9-13.4-3.9-17.7C238.2,32.4,232.4,29.7,222.5,29.7z M210.3,54c0.1-3.2,0.1-6.4,0.9-9.3c1.3-5.3,4.3-7.2,11.4-7.2' +
    'c6.4,0,9.6,1.8,11.1,7.4c0.8,2.9,0.9,5.8,0.9,9L210.3,54z M282.6,30c-0.9-0.2-0.7-0.2-2.2-0.2h-1.6c-5.2,0.1-12.1,1.1-16.3,2.7' +
    'c-4.1,1.4-5.9,2.6-5.9,6.5v40.5c0,0.9,1.2,1.4,1.5,1.4h8c0.9,0,1.4-0.6,1.4-1.4V39.8c3.7-0.9,8.8-1.5,14.7-1.5' +
    'c1.2,0,1.3-0.7,1.3-1.4v-5.4C283.6,30.4,283,30.1,282.6,30z"></path>' +
    '</g>' +
    ' </g>' +
    '</svg>' +
    '</div>' +
    '<div class="top-header--title-container right">' +
    '<span class="top-header-title"><b>' +
    '{{{staticData.header.title}}}' +
    '</b></span>' +
    '</div>' +
    '</div>'
);


Handlebars.registerPartial('head',
    '<head>' +
    '<meta charset="UTF-8"> {{#each cssLinks}}' +
    '<link rel="stylesheet" href={{link}}>{{/each}} {{#each jsLinks}}' +
    '<script src={{link}}>' +
    '</script>{{/each}}' +
    '</head>'
);




Handlebars.registerHelper('circle', function (percantage) {
    // console.log(percantage)
    // const res = drawPercentageCircle(30, percantage)
    return new Handlebars.SafeString('circleGraph');
});

Handlebars.registerHelper("ifvalue", function (conditional, options) {
    if (conditional == options.hash.equals) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});


Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {

    var operators, result;

    if (arguments.length < 3) {
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
    }

    if (options === undefined) {
        options = rvalue;
        rvalue = operator;
        operator = "===";
    }

    operators = {
        '==': function (l, r) {
            return l == r;
        },
        '===': function (l, r) {
            return l === r;
        },
        '!=': function (l, r) {
            return l != r;
        },
        '!==': function (l, r) {
            return l !== r;
        },
        '<': function (l, r) {
            return l < r;
        },
        '>': function (l, r) {
            return l > r;
        },
        '<=': function (l, r) {
            return l <= r;
        },
        '>=': function (l, r) {
            return l >= r;
        },
        'typeof': function (l, r) {
            return typeof l == r;
        }
    };

    if (!operators[operator.trim()]) {
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
    }

    result = operators[operator.trim()](lvalue, rvalue);

    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});


Handlebars.registerHelper('inc', function (number, options) {
    if (typeof (number) === 'undefined' || number === null)
        return null;

    // Increment by inc parameter if it exists or just by one
    return number + (options.hash.inc || 1);
});

Handlebars.registerHelper("math", function (lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});

Handlebars.registerHelper('switch', function(name, value, options) {
    this['_switch_value_' + name] = value;
    this['_switch_break_' + name] = false;
    var html = options.fn(this);
    delete this['_switch_break_' + name];
    delete this['_switch_value_' + name];
    return html;
});

Handlebars.registerHelper('case', function(name, value, options) {
    var args = Array.prototype.slice.call(arguments);
    var options    = args.pop();
    var caseValues = args;

    if ( this['_switch_break_' + name] || caseValues.indexOf(this['_switch_value_' + name]) === -1) {
        return '';
    } else {
        this['_switch_break_' + name] = true;
        return options.fn(this);
    }
});

Handlebars.registerHelper('default', function(name, options) {
    if ( !this['_switch_break_' + name] ) {
        return options.fn(this);
    }
});

/*eslint-enable */
