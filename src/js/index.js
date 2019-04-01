import "reset.scss";
import "index.scss";
let img = 'annualreport.png';
require('images/' + img);








var roundLogEl = document.querySelector('.year-number');
var roundLogEl2 = document.querySelector('.average-number');
var roundLogEl3 = document.querySelector('.blue-number');
var roundLogEl4 = document.querySelector('.brown-number');
var roundLogEl5 = document.querySelector('.blue-number-pr');
var roundLogEl6 = document.querySelector('.brown-number-pr');
var roundLogEl7 = document.querySelector('.money-number');
var roundLogEl8 = document.querySelector('.money-number2');
var roundLogEl9 = document.querySelector('.satisfaction-year-number');
var roundLogEl10 = document.querySelector('.satisfaction-year-number2');


anime({
    targets: roundLogEl,
    innerHTML: [0, 7.5],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl2,
    innerHTML: [0, 204.4],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl3,
    innerHTML: [0, 120],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl4,
    innerHTML: [0, 80],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl5,
    innerHTML: [0, 99.69],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl6,
    innerHTML: [0, 99.59],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl7,
    innerHTML: [0, 196.5],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl8,
    innerHTML: [0, 17.9],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl9,
    innerHTML: [0, 96.6],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl10,
    innerHTML: [0, 486.3],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});

//年度總量
var bar = new ProgressBar.Line(container2016, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a6c3dd',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 7.2));
    }
});
var bar2 = new ProgressBar.Line(container2017, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a6c3dd',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 7.2));
    }
});
var bar3 = new ProgressBar.Line(container2018, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 7.2));
    }
});

//平均日運量
var bar4 = new ProgressBar.Line(secContainer2016, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 196));
    }
});
var bar5 = new ProgressBar.Line(secContainer2017, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 202));
    }
});
var bar6 = new ProgressBar.Line(secContainer2018, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 204));
    }
});

//Units:Seconds
var bar7 = new ProgressBar.Line(mrtblueline2016, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#3b91c0',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 120));
    }
});
var bar8 = new ProgressBar.Line(mrtbrownline2016, {
    strokeWidth: 12,
    easing: 'easeInOut',
    duration: 1400,
    color: '#956229',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#956229',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 85));
    }
});
var bar9 = new ProgressBar.Line(mrtblueline2017, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#3b91c0',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 120));
    }
});
var bar10 = new ProgressBar.Line(mrtbrownline2017, {
    strokeWidth: 12,
    easing: 'easeInOut',
    duration: 1400,
    color: '#956229',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#956229',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 80));
    }
});
var bar11 = new ProgressBar.Line(mrtblueline20172, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#3b91c0',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 120));
    }
});
var bar12 = new ProgressBar.Line(mrtbrownline20172, {
    strokeWidth: 12,
    easing: 'easeInOut',
    duration: 1400,
    color: '#956229',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#956229',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 80));
    }
});

//Units:%
var bar13 = new ProgressBar.Line(mrtblueline2016sc, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#3b91c0',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 120));
    }
});
var bar14 = new ProgressBar.Line(mrtbrownline2016sc, {
    strokeWidth: 12,
    easing: 'easeInOut',
    duration: 1400,
    color: '#956229',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#956229',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 85));
    }
});
var bar15 = new ProgressBar.Line(mrtblueline2017sc, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#3b91c0',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 120));
    }
});
var bar16 = new ProgressBar.Line(mrtbrownline2017sc, {
    strokeWidth: 12,
    easing: 'easeInOut',
    duration: 1400,
    color: '#956229',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#956229',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 80));
    }
});
var bar17 = new ProgressBar.Line(mrtblueline20172sc, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#3b91c0',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 120));
    }
});
var bar18 = new ProgressBar.Line(mrtbrownline20172sc, {
    strokeWidth: 12,
    easing: 'easeInOut',
    duration: 1400,
    color: '#956229',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '0 30px 30px 0' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#956229',
            position: 'absolute',
            right: '-25px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : "rotate(90deg)",
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 80));
    }
});

//Financial Figures
var bar19 = new ProgressBar.Line(sec3Container2016, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#f0ce86',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 162));
    }
});
var bar20 = new ProgressBar.Line(sec3Container2017, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#f0ce86',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 193.1));
    }
});
var bar21 = new ProgressBar.Line(sec3Container2018, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#e2a301',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 196.5));
    }
});
var bar22 = new ProgressBar.Line(sec3Container2016s2, {
    strokeWidth: 8,
    easing: 'easeInOut',
    duration: 1400,
    color: '#f0ce86',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 162));
    }
});
var bar23 = new ProgressBar.Line(sec3Container2017s2, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#f0ce86',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 193.1));
    }
});
var bar24 = new ProgressBar.Line(sec3Container2018s2, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#e2a301',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 196.5));
    }
});

//Performance
var bar25 = new ProgressBar.Line(sec4Container2016, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#f0ce86',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 99.8));
    }
});
var bar26 = new ProgressBar.Line(sec4Container2017, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#e2a301',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 95));
    }
});
var bar27 = new ProgressBar.Line(sec4Container2018, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#e2a301',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 96.6));
    }
});
var bar28 = new ProgressBar.Line(sec4Container2016s2, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#e2a301',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 471.8));
    }
});
var bar29 = new ProgressBar.Line(sec4Container2017s2, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#e2a301',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 488.4));
    }
});
var bar30 = new ProgressBar.Line(sec4Container2018s2, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#e2a301',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '50px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform : null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() *486.3));
    }
});

bar.animate(1.0);  // Number from 0.0 to 1.0
bar2.animate(1.0);  // Number from 0.0 to 1.0
bar3.animate(1.0);  // Number from 0.0 to 1.0
bar4.animate(1.0);  // Number from 0.0 to 1.0
bar5.animate(1.0);  // Number from 0.0 to 1.0
bar6.animate(1.0);  // Number from 0.0 to 1.0
bar7.animate(1.0);  // Number from 0.0 to 1.0
bar8.animate(1.0);  // Number from 0.0 to 1.0
bar9.animate(1.0);  // Number from 0.0 to 1.0
bar10.animate(1.0);  // Number from 0.0 to 1.0
bar11.animate(1.0);  // Number from 0.0 to 1.0
bar12.animate(1.0);  // Number from 0.0 to 1.0
bar13.animate(1.0);  // Number from 0.0 to 1.0
bar14.animate(1.0);  // Number from 0.0 to 1.0
bar15.animate(1.0);  // Number from 0.0 to 1.0
bar16.animate(1.0);  // Number from 0.0 to 1.0
bar17.animate(1.0);  // Number from 0.0 to 1.0
bar18.animate(1.0);  // Number from 0.0 to 1.0
bar19.animate(1.0);  // Number from 0.0 to 1.0
bar20.animate(1.0);  // Number from 0.0 to 1.0
bar21.animate(1.0);  // Number from 0.0 to 1.0
bar22.animate(1.0);  // Number from 0.0 to 1.0
bar23.animate(1.0);  // Number from 0.0 to 1.0
bar24.animate(1.0);  // Number from 0.0 to 1.0
bar25.animate(1.0);  // Number from 0.0 to 1.0
bar26.animate(1.0);  // Number from 0.0 to 1.0
bar27.animate(1.0);  // Number from 0.0 to 1.0
bar28.animate(1.0);  // Number from 0.0 to 1.0
bar29.animate(1.0);  // Number from 0.0 to 1.0
bar30.animate(1.0);  // Number from 0.0 to 1.0


















