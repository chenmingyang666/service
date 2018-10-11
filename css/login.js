import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // * layuiAdmin.std-v1.0.0 LPPL License By http://www.layui.com/admin/
  '#LAY_app': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'html': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    // background: #16a085;
    'fontFamily': ''Montserrat', sans-serif',
    'lineHeight': [{ 'unit': 'px', 'value': 1.3 }],
    'WebkitFontSmoothing': 'antialiased'
  },
  // 动态线粒
  '#particles': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'relative'
  },
  'intro': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center'
  },
  'intro': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center'
  },
  'layui-layout-body': {
    'overflow': 'auto'
  },
  '#LAY-user-login': {
    'display': 'block !important'
  },
  'layadmin-user-display-show': {
    'display': 'block !important'
  },
  'layadmin-user-login': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.4 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'minHeight': [{ 'unit': '%V', 'value': 1 }],
    'boxSizing': 'border-box',
    'screen&&<w768': {
      'paddingTop': [{ 'unit': 'px', 'value': 60 }]
    }
  },
  'layadmin-user-login-main': {
    'width': [{ 'unit': 'px', 'value': 375 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'boxSizing': 'border-box'
  },
  'layadmin-user-login-box': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'layadmin-user-login-header': {
    'textAlign': 'center'
  },
  'layadmin-user-login-header h2': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'fontWeight': '300',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': '#000'
  },
  'layadmin-user-login-header p': {
    'fontWeight': '300',
    'color': '#999'
  },
  'layadmin-user-login-body layui-form-item': {
    'position': 'relative'
  },
  'layadmin-user-login-icon': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 38 }],
    'lineHeight': [{ 'unit': 'px', 'value': 36 }],
    'textAlign': 'center',
    'color': '#d2d2d2'
  },
  'layadmin-user-login-body layui-form-item layui-input': {
    'paddingLeft': [{ 'unit': 'px', 'value': 38 }]
  },
  'layadmin-user-login-codeimg': {
    'maxHeight': [{ 'unit': 'px', 'value': 38 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'cursor': 'pointer',
    'boxSizing': 'border-box'
  },
  'layadmin-user-login-other': {
    'position': 'relative',
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 38 }],
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'layadmin-user-login-other>*': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'layadmin-user-login-other layui-icon': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'fontSize': [{ 'unit': 'px', 'value': 26 }]
  },
  'layadmin-user-login-other a:hover': {
    'opacity': '.8'
  },
  'layadmin-user-jump-change': {
    'float': 'right'
  },
  'layadmin-user-login-footer': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'center',
    'boxSizing': 'border-box',
    'color': 'rgba(0, 0, 0, .5)'
  },
  'layadmin-user-login-footer span': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }]
  },
  'layadmin-user-login-footer a': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'color': 'rgba(0, 0, 0, .5)'
  },
  'layadmin-user-login-footer a:hover': {
    'color': 'rgba(0, 0, 0, 1)'
  },
  'layadmin-user-login-main[bgimg]': {
    'backgroundColor': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .05)' }]
  },
  'ladmin-user-login-theme': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center'
  },
  'ladmin-user-login-theme ul': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'backgroundColor': '#fff'
  },
  'ladmin-user-login-theme ul li': {
    'display': 'inline-block',
    'verticalAlign': 'top',
    'width': [{ 'unit': 'px', 'value': 64 }],
    'height': [{ 'unit': 'px', 'value': 43 }],
    'cursor': 'pointer',
    'transition': 'all .3s',
    'WebkitTransition': 'all .3s',
    'backgroundColor': '#f2f2f2'
  },
  'ladmin-user-login-theme ul li:hover': {
    'opacity': '.9'
  }
});
