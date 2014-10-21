/**
 * @fileOverview 图表的皮肤
 * @ignore
 */


var  Util = require('achart-util');

/**
 * Chart.Theme
 * @param {Object} cfg  样式的配置项
 * @param {Object} base 扩展的样式
 */
var Theme = function(base,cfg){

  return Theme.initTheme(base,cfg);
};

Theme.initTheme = function(base,cfg){
  return Util.mix(true,{},base,cfg);
};

var lineCfg = {
  duration : 1000,
  line : {
    'stroke-width': 2,
    'stroke-linejoin': 'round',
    'stroke-linecap': 'round'
  },
  lineActived : {
    'stroke-width': 3
  },
  markers : {
    marker : {
      radius : 3
    },
    actived : {
      radius : 6,
      stroke: '#fff'
    }
  },
  animate : true
};

Theme.Origin = Theme({
  // colors : [ '#5e90c9','#1c2d3f','#a9d052','#a12d2d','#43bbb4','#5a2a94','#fabe3c','#2279dc','#e360e5','#48000c'],
  plotCfg : {
    margin : [50]
  },
  yTickCounts : [3,5],
  xTickCounts : [5,10],
  title : {
    'font-size' : '16px',
    'font-family' : 'SimSun,Georgia, Times, serif',
    'fill' : '#274b6d'
  },
  subTitle : {
    'font-size' : 14,
    'font-family' : 'tahoma,arial,SimSun,Georgia, Times, serif',
    'fill' : '#4d759e'
  },
  xAxis : {
    labels : {
      label : {
        y : 12
      }
    }
  },
  yAxis : {
    line : null,
    tickLine : null,
    grid : {
      line : {
        stroke : '#c0c0c0'
      }
    },
    title : {
      text : '',
      rotate : -90,
      x : -30
    },
    position:'left',
    labels : {
      label : {
        x : -12
      }
    }
  },
  legend : {
      dy : 30
  },
  seriesOptions : {
    lineCfg : lineCfg,
    areaCfg : {
      line : {
        'stroke-width': .5,
        'stroke-linejoin': 'round',
        'stroke-linecap': 'round'
      },
      lineActived : {
        'stroke-width': 1
      },
      animate : true,
      markers : lineCfg.markers
    },
    flagCfg: {
      flags:{
          flag:{
              distance: -15,
              line: {
                  'stroke': '#333',
                  'stroke-width': 1
              },
              shapeType: 'rect',
              shapeCfg: {
                  stroke: '#333',
                  width: 22,
                  height: 22
              },
              title: 'A',
              titleCfg: {
                  rotate : 90,
                  fill : '#333333',
                  'font-size':13,
                  'font-weight' : 'bold'
              },
              text: ''
          }
      },
      duration : 1000,
      animate: true,
      onSeries: 'xaxis'
    },
    candlestickCfg: {
      candlesticks: {
          candlestick:{
              riseLine : {
                  stroke: 'red'
              },
              fallLine : {
                  stroke: 'green'
              },
              riseShape: {
                  stroke : 'red',
                  fill : 'red'
              },
              fallShape: {
                  stroke : 'green',
                  fill : 'green'
              }
          }
      }
    },
    bubbleCfg : {
      circle : {
          'stroke-width' : 1,
          'fill-opacity' : .5
      },
      activeCircle : {
          'stroke-width' : 2
      }
    },
    pieCfg : {
      colors : [ '#5e90c9','#1c2d3f','#a9d052','#a12d2d','#43bbb4','#5a2a94','#fabe3c','#2279dc','#e360e5','#48000c'],
      item : {
        stroke : '#fff'
      },
      labels : {
        distance : 30,
        label : {

        }
      }
    }

  },
  tooltip : {
    x : -999,
    y : -999,
    offset : 5
  }

});

// 所有的基础样式.由于深度继承,所以数组类的自己覆盖
Theme.Base = Theme.initTheme(Theme.Origin, {
  colors : [ '#5e90c9','#1c2d3f','#a9d052','#a12d2d','#43bbb4','#5a2a94','#fabe3c','#2279dc','#e360e5','#48000c'],
  symbols : ['circle','diamond','square','triangle','triangle-down'],
  plotCfg : {
    margin : [50,50,100]
  },
  seriesOptions : {
    pieCfg : {
      colors : [ '#5e90c9','#1c2d3f','#a9d052','#a12d2d','#43bbb4','#5a2a94','#fabe3c','#2279dc','#e360e5','#48000c']
    }
  }
});


// smooth风格的基础样式,色系分布均为6种.
Theme.SmoothBase = Theme.initTheme(Theme.Origin, {
  title : {
    'fill' : '#505050'
  },
  subTitle : {
    'fill' : '#999'
  },
  xAxis : {
    line : {
      'stroke-width' : 1,
      'stroke' : '#a7a7a7'
    },
    tickLine : null,
    labels : {
      label : {
        y : 12,
        fill: "#444444",
        'font-size': '12'
      }
    }
  },
  yAxis : {
    grid : {
      line : {
        stroke : '#a7a7a7',//c9c3bb
        // "stroke-linecap" : "round",
        "stroke-dasharray" : "."
      }
    },
    title : {
      text : '',
      rotate : -90,
      x : -30,
      fill : "#444"
    },
    position:'left',
    labels : {
      label : {
        x : -20,
        fill: "#444444",
        'font-size': '12'
      }
    }
  },
  plotCfg : {
    margin : [50,50,100]
  },
  legend: {
    back: null,
    spacingX: 30,
    itemCfg : { //子项的配置信息
      label : {
        fill : '#a7a7a7',
        'text-anchor' : 'start',
        cursor : 'pointer',
        'font-size': '12'
      }
    }
  },
  colors : [ '#4dceff','#79c850','#ffb65d','#fc694b','#9a9792','#7179cb'],
  symbols : ['circle'],
  seriesOptions : {
    lineCfg : {
      line: {
        'stroke-width': 4
      },
      lineActived : {
        'stroke-width': 4
      },
      markers: {
        marker: {
          fill: '#fff',
          radius: 6,
          'stroke-width': 4
        },
        actived: {
          fill: '#fff',
          'stroke-width': 5,
          stroke: null
        }
      }
    },
    areaCfg : {
      markers: {
        marker:{
          single: true,
          fill: '#fff',
          radius: 6,
          'stroke-width': 4
        },
        actived: {
          fill: '#fff',
          'stroke-width': 5,
          stroke: null
        }
      },
      area :{
        'fill-opacity': .5,
        stroke: null
      }
    },
    pieCfg : {
      colors : [ '#4dceff','#79c850','#ffb65d','#fc694b','#9a9792','#7179cb'],
      labels : {
        distance : 30,
        label : {
            'font-size' : '12',
            fill : '#a7a7a7'
        }
      }
    }
  },
  tooltip: {
    offset : 10,
    title : {
      'font-size' : '12',
      'text-anchor' : 'start',
      x : 8,
      y : 15,
      fill:"#444"
    },
    value : {
      'font-size' : '12',
      'font-weight' :'normal',
      'text-anchor' : 'start',
      fill:"#444"
    },
    crossLine : {
      stroke : "#d7d7d7"
    }
  }
});

Theme.Smooth1 = Theme.initTheme(Theme.SmoothBase)

Theme.Smooth2 = Theme.initTheme(Theme.SmoothBase, {
  colors : [ '#00a3d7','#6ebb46','#f6c100','#ff6a00','#e32400','#423ba8'],
  symbols : ['circle','diamond','square','triangle','triangle-down'],
  seriesOptions : {pieCfg : {
    colors : [ '#00a3d7','#6ebb46','#f6c100','#ff6a00','#e32400','#423ba8']
  }}
})

Theme.Smooth3 = Theme.initTheme(Theme.SmoothBase, {
  colors : [ '#40a00e','#444444','#85cc82','#5e5e64','#60b336','#89847f'],
  seriesOptions : {pieCfg : {
    colors : [ '#40a00e','#444444','#85cc82','#5e5e64','#60b336','#89847f']
  }}
})

Theme.Smooth4 = Theme.initTheme(Theme.SmoothBase, {
  colors : [ '#e1c673','#c49756','#8c6c42','#595348','#c86c4b','#7c4f34'],
  seriesOptions : {pieCfg : {
    colors : [ '#e1c673','#c49756','#8c6c42','#595348','#c86c4b','#7c4f34']
  }}
})

Theme.Smooth5 = Theme.initTheme(Theme.SmoothBase, {
  colors : [ '#89847f','#aea9a2','#606060','#232323','#d8d2c7','#444444'],
  seriesOptions : {pieCfg : {
    colors : [ '#89847f','#aea9a2','#606060','#232323','#d8d2c7','#444444']
  }}
})

Theme.Smooth6 = Theme.initTheme(Theme.SmoothBase, {
  colors : [ '#ff9d40','#89847f','#ff8127','#b4aea7','#ffba66','#606060'],
  seriesOptions : {pieCfg : {
    colors : [ '#ff9d40','#89847f','#ff8127','#b4aea7','#ffba66','#606060']
  }}
})

Theme.Smooth7 = Theme.initTheme(Theme.SmoothBase, {
  colors : [ '#25b0dd','#7fdcff','#30b2c8','#5dc5ee','#266796','#258bca'],
  seriesOptions : {pieCfg : {
    colors : [ '#25b0dd','#7fdcff','#30b2c8','#5dc5ee','#266796','#258bca']
  }}
})



module.exports = Theme;
