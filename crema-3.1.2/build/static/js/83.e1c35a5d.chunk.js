(this.webpackJsonphister=this.webpackJsonphister||[]).push([[83],{1635:function(r,e,t){"use strict";var n=t(2),i=n.createContext(void 0);e.a=i},1678:function(r,e,t){"use strict";var n=t(13),i=t(3),a=t(2),o=(t(8),t(12)),c=t(153),s=t(17),m=t(25),d=t(101),l=t(98);function p(r){return Object(d.a)("MuiFormGroup",r)}Object(l.a)("MuiFormGroup",["root","row"]);var x=t(1),j=["className","row"],u=Object(s.a)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(r,e){var t=r.ownerState;return[e.root,t.row&&e.row]}})((function(r){var e=r.ownerState;return Object(i.a)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})})),h=a.forwardRef((function(r,e){var t=Object(m.a)({props:r,name:"MuiFormGroup"}),a=t.className,s=t.row,d=void 0!==s&&s,l=Object(n.a)(t,j),h=Object(i.a)({},t,{row:d}),b=function(r){var e=r.classes,t={root:["root",r.row&&"row"]};return Object(c.a)(t,p,e)}(h);return Object(x.jsx)(u,Object(i.a)({className:Object(o.default)(b.root,a),ownerState:h,ref:e},l))}));e.a=h},1759:function(r,e,t){"use strict";var n=t(14),i=t(3),a=t(13),o=t(2),c=(t(8),t(1678)),s=t(63),m=t(260),d=t(1635),l=t(313),p=t(1),x=["actions","children","defaultValue","name","onChange","value"],j=o.forwardRef((function(r,e){var t=r.actions,j=r.children,u=r.defaultValue,h=r.name,b=r.onChange,g=r.value,O=Object(a.a)(r,x),f=o.useRef(null),y=Object(m.a)({controlled:g,default:u,name:"RadioGroup"}),G=Object(n.a)(y,2),v=G[0],w=G[1];o.useImperativeHandle(t,(function(){return{focus:function(){var r=f.current.querySelector("input:not(:disabled):checked");r||(r=f.current.querySelector("input:not(:disabled)")),r&&r.focus()}}}),[]);var I=Object(s.a)(e,f),B=Object(l.a)(h);return Object(p.jsx)(d.a.Provider,{value:{name:B,onChange:function(r){w(r.target.value),b&&b(r,r.target.value)},value:v},children:Object(p.jsx)(c.a,Object(i.a)({role:"radiogroup",ref:I},O,{children:j}))})}));e.a=j},1781:function(r,e,t){"use strict";var n=t(6),i=t(13),a=t(3),o=t(2),c=(t(8),t(153)),s=t(145),m=t(726),d=t(25),l=t(86),p=t(1),x=Object(l.a)(Object(p.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),j=Object(l.a)(Object(p.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=t(17),h=Object(u.a)("span")({position:"relative",display:"flex"}),b=Object(u.a)(x,{skipSx:!0})({transform:"scale(1)"}),g=Object(u.a)(j,{skipSx:!0})((function(r){var e=r.theme,t=r.ownerState;return Object(a.a)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})})}));var O=function(r){var e=r.checked,t=void 0!==e&&e,n=r.classes,i=void 0===n?{}:n,o=r.fontSize,c=Object(a.a)({},r,{checked:t});return Object(p.jsxs)(h,{className:i.root,ownerState:c,children:[Object(p.jsx)(b,{fontSize:o,className:i.background,ownerState:c}),Object(p.jsx)(g,{fontSize:o,className:i.dot,ownerState:c})]})},f=t(18),y=t(741),G=t(1635);var v=t(101),w=t(98);function I(r){return Object(v.a)("MuiRadio",r)}var B=Object(w.a)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),S=["checked","checkedIcon","color","icon","name","onChange","size"],C=Object(u.a)(m.a,{shouldForwardProp:function(r){return Object(u.b)(r)||"classes"===r},name:"MuiRadio",slot:"Root",overridesResolver:function(r,e){var t=r.ownerState;return[e.root,e["color".concat(Object(f.a)(t.color))]]}})((function(r){var e=r.theme,t=r.ownerState;return Object(a.a)({color:e.palette.text.secondary,"&:hover":{backgroundColor:Object(s.a)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&Object(n.a)({},"&.".concat(B.checked),{color:e.palette[t.color].main}),Object(n.a)({},"&.".concat(B.disabled),{color:e.palette.action.disabled}))}));var P=Object(p.jsx)(O,{checked:!0}),R=Object(p.jsx)(O,{}),A=o.forwardRef((function(r,e){var t,n,s,m,l=Object(d.a)({props:r,name:"MuiRadio"}),x=l.checked,j=l.checkedIcon,u=void 0===j?P:j,h=l.color,b=void 0===h?"primary":h,g=l.icon,O=void 0===g?R:g,v=l.name,w=l.onChange,B=l.size,A=void 0===B?"medium":B,k=Object(i.a)(l,S),T=Object(a.a)({},l,{color:b,size:A}),W=function(r){var e=r.classes,t=r.color,n={root:["root","color".concat(Object(f.a)(t))]};return Object(a.a)({},e,Object(c.a)(n,I,e))}(T),F=o.useContext(G.a),z=x,M=Object(y.a)(w,F&&F.onChange),N=v;return F&&("undefined"===typeof z&&(s=F.value,z="object"===typeof(m=l.value)&&null!==m?s===m:String(s)===String(m)),"undefined"===typeof N&&(N=F.name)),Object(p.jsx)(C,Object(a.a)({type:"radio",icon:o.cloneElement(O,{fontSize:null!=(t=R.props.fontSize)?t:A}),checkedIcon:o.cloneElement(u,{fontSize:null!=(n=P.props.fontSize)?n:A}),ownerState:T,classes:W,name:N,checked:z,onChange:M,ref:e},k))}));e.a=A},2289:function(r,e,t){"use strict";t.r(e);var n=t(2),i=t(72),a=t(1458),o=t(38),c=t(60),s=t(5),m=t(17),d=t(206),l=t(604),p=t(1),x=Object(m.a)(l.a)((function(r){var e=r.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function j(){return Object(p.jsx)(d.a,{sx:{flexGrow:1},children:Object(p.jsxs)(a.a,{container:!0,spacing:2,children:[Object(p.jsx)(a.a,{item:!0,xs:8,children:Object(p.jsx)(x,{children:"xs=8"})}),Object(p.jsx)(a.a,{item:!0,xs:4,children:Object(p.jsx)(x,{children:"xs=4"})}),Object(p.jsx)(a.a,{item:!0,xs:4,children:Object(p.jsx)(x,{children:"xs=4"})}),Object(p.jsx)(a.a,{item:!0,xs:8,children:Object(p.jsx)(x,{children:"xs=8"})})]})})}var u=Object(m.a)(l.a)((function(r){var e=r.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function h(){return Object(p.jsx)(d.a,{sx:{flexGrow:1},children:Object(p.jsxs)(a.a,{container:!0,spacing:2,children:[Object(p.jsx)(a.a,{item:!0,xs:6,md:8,children:Object(p.jsx)(u,{children:"xs=6 md=8"})}),Object(p.jsx)(a.a,{item:!0,xs:6,md:4,children:Object(p.jsx)(u,{children:"xs=6 md=4"})}),Object(p.jsx)(a.a,{item:!0,xs:6,md:4,children:Object(p.jsx)(u,{children:"xs=6 md=4"})}),Object(p.jsx)(a.a,{item:!0,xs:6,md:8,children:Object(p.jsx)(u,{children:"xs=6 md=8"})})]})})}var b=t(14),g=t(1555),O=t(1578),f=t(1585),y=t(1759),G=t(1781);function v(){var r=n.useState(2),e=Object(b.a)(r,2),t=e[0],i=e[1];return Object(p.jsxs)(a.a,{sx:{flexGrow:1},container:!0,spacing:2,children:[Object(p.jsx)(a.a,{item:!0,xs:12,children:Object(p.jsx)(a.a,{container:!0,justifyContent:"center",spacing:t,children:[0,1,2].map((function(r){return Object(p.jsx)(a.a,{item:!0,children:Object(p.jsx)(l.a,{sx:{height:140,width:100}})},r)}))})}),Object(p.jsx)(a.a,{item:!0,xs:12,children:Object(p.jsx)(l.a,{sx:{p:2},children:Object(p.jsx)(a.a,{container:!0,children:Object(p.jsx)(a.a,{item:!0,children:Object(p.jsxs)(O.a,{component:"fieldset",children:[Object(p.jsx)(g.a,{component:"legend",children:"spacing"}),Object(p.jsx)(y.a,{name:"spacing","aria-label":"spacing",value:t.toString(),onChange:function(r){i(Number(r.target.value))},row:!0,children:[0,.5,1,2,3,4,8,12].map((function(r){return Object(p.jsx)(f.a,{value:r.toString(),control:Object(p.jsx)(G.a,{}),label:r.toString()},r)}))})]})})})})})]})}var w=Object(m.a)(l.a)((function(r){var e=r.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function I(){return Object(p.jsx)(d.a,{sx:{width:"100%"},children:Object(p.jsxs)(a.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(p.jsx)(a.a,{item:!0,xs:6,children:Object(p.jsx)(w,{children:"1"})}),Object(p.jsx)(a.a,{item:!0,xs:6,children:Object(p.jsx)(w,{children:"2"})}),Object(p.jsx)(a.a,{item:!0,xs:6,children:Object(p.jsx)(w,{children:"3"})}),Object(p.jsx)(a.a,{item:!0,xs:6,children:Object(p.jsx)(w,{children:"4"})})]})})}var B=Object(m.a)(l.a)((function(r){var e=r.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary})}));function S(){return Object(p.jsx)(d.a,{sx:{flexGrow:1},children:Object(p.jsx)(a.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:Array.from(Array(6)).map((function(r,e){return Object(p.jsx)(a.a,{item:!0,xs:2,sm:4,md:4,children:Object(p.jsx)(B,{children:"xs=2"})},e)}))})})}var C=Object(m.a)(l.a)((function(r){var e=r.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function P(){return Object(p.jsx)(d.a,{sx:{flexGrow:1},children:Object(p.jsxs)(a.a,{container:!0,spacing:3,children:[Object(p.jsx)(a.a,{item:!0,xs:!0,children:Object(p.jsx)(C,{children:"xs"})}),Object(p.jsx)(a.a,{item:!0,xs:6,children:Object(p.jsx)(C,{children:"xs=6"})}),Object(p.jsx)(a.a,{item:!0,xs:!0,children:Object(p.jsx)(C,{children:"xs"})})]})})}var R=Object(m.a)(l.a)((function(r){var e=r.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function A(){return Object(p.jsx)(d.a,{sx:{flexGrow:1},children:Object(p.jsxs)(a.a,{container:!0,spacing:3,children:[Object(p.jsx)(a.a,{item:!0,xs:"auto",children:Object(p.jsx)(R,{children:"variable width content"})}),Object(p.jsx)(a.a,{item:!0,xs:6,children:Object(p.jsx)(R,{children:"xs=6"})}),Object(p.jsx)(a.a,{item:!0,xs:!0,children:Object(p.jsx)(R,{children:"xs"})})]})})}var k=t(223),T=t(1456),W=Object(m.a)("img")({margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"});function F(){return Object(p.jsx)(l.a,{sx:{p:2,margin:"auto",maxWidth:500,flexGrow:1},children:Object(p.jsxs)(a.a,{container:!0,spacing:2,children:[Object(p.jsx)(a.a,{item:!0,children:Object(p.jsx)(T.a,{sx:{width:128,height:128},children:Object(p.jsx)(W,{alt:"complex",src:"/static/images/grid/complex.jpg"})})}),Object(p.jsxs)(a.a,{item:!0,xs:12,sm:!0,container:!0,children:[Object(p.jsxs)(a.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,children:[Object(p.jsxs)(a.a,{item:!0,xs:!0,children:[Object(p.jsx)(k.a,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"Standard license"}),Object(p.jsx)(k.a,{variant:"body2",gutterBottom:!0,children:"Full resolution 1920x1080 \u2022 JPEG"}),Object(p.jsx)(k.a,{variant:"body2",color:"text.secondary",children:"ID: 1030114"})]}),Object(p.jsx)(a.a,{item:!0,children:Object(p.jsx)(k.a,{sx:{cursor:"pointer"},variant:"body2",children:"Remove"})})]}),Object(p.jsx)(a.a,{item:!0,children:Object(p.jsx)(k.a,{variant:"subtitle1",component:"div",children:"$19.00"})})]})]})})}var z=Object(m.a)(l.a)((function(r){var e=r.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function M(){return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(a.a,{item:!0,xs:4,children:Object(p.jsx)(z,{children:"Item"})}),Object(p.jsx)(a.a,{item:!0,xs:4,children:Object(p.jsx)(z,{children:"Item"})}),Object(p.jsx)(a.a,{item:!0,xs:4,children:Object(p.jsx)(z,{children:"Item"})})]})}function N(){return Object(p.jsx)(d.a,{sx:{flexGrow:1},children:Object(p.jsxs)(a.a,{container:!0,spacing:1,children:[Object(p.jsx)(a.a,{container:!0,item:!0,spacing:3,children:Object(p.jsx)(M,{})}),Object(p.jsx)(a.a,{container:!0,item:!0,spacing:3,children:Object(p.jsx)(M,{})}),Object(p.jsx)(a.a,{container:!0,item:!0,spacing:3,children:Object(p.jsx)(M,{})})]})})}var D=Object(m.a)(l.a)((function(r){var e=r.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function L(){return Object(p.jsx)(d.a,{sx:{flexGrow:1},children:Object(p.jsxs)(a.a,{container:!0,spacing:2,columns:16,children:[Object(p.jsx)(a.a,{item:!0,xs:8,children:Object(p.jsx)(D,{children:"xs=8"})}),Object(p.jsx)(a.a,{item:!0,xs:8,children:Object(p.jsx)(D,{children:"xs=8"})})]})})}var E=t(988),J="Truncation should be conditionally applicable on this long line of text\n as this is a much longer line than what the container can support. ";function V(){return Object(p.jsxs)(d.a,{sx:{flexGrow:1,overflow:"hidden",px:3},children:[Object(p.jsx)(l.a,{sx:{maxWidth:400,my:1,mx:"auto",p:2},children:Object(p.jsxs)(a.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(p.jsx)(a.a,{item:!0,children:Object(p.jsx)(E.a,{children:"W"})}),Object(p.jsx)(a.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(p.jsx)(k.a,{noWrap:!0,children:J})})]})}),Object(p.jsx)(l.a,{sx:{maxWidth:400,my:1,mx:"auto",p:2},children:Object(p.jsxs)(a.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(p.jsx)(a.a,{item:!0,children:Object(p.jsx)(E.a,{children:"W"})}),Object(p.jsx)(a.a,{item:!0,xs:!0,children:Object(p.jsx)(k.a,{noWrap:!0,children:J})})]})}),Object(p.jsx)(l.a,{sx:{maxWidth:400,my:1,mx:"auto",p:2},children:Object(p.jsxs)(a.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(p.jsx)(a.a,{item:!0,children:Object(p.jsx)(E.a,{children:"W"})}),Object(p.jsx)(a.a,{item:!0,xs:!0,children:Object(p.jsx)(k.a,{children:J})})]})})]})}var q=Object(m.a)(l.a)((function(r){var e=r.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function H(){return Object(p.jsx)(d.a,{sx:{width:1},children:Object(p.jsxs)(d.a,{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:2,children:[Object(p.jsx)(d.a,{gridColumn:"span 8",children:Object(p.jsx)(q,{children:"xs=8"})}),Object(p.jsx)(d.a,{gridColumn:"span 4",children:Object(p.jsx)(q,{children:"xs=4"})}),Object(p.jsx)(d.a,{gridColumn:"span 4",children:Object(p.jsx)(q,{children:"xs=4"})}),Object(p.jsx)(d.a,{gridColumn:"span 8",children:Object(p.jsx)(q,{children:"xs=8"})})]})})}e.default=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(i.a,{title:"Grid",description:"The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.",refUrl:"https://mui.com/components/grid/"}),Object(p.jsxs)(c.a,{children:[Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"BasicGrid",component:j,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Box from '@mui/material/Box';\r\nimport Paper from '@mui/material/Paper';\r\nimport Grid from '@mui/material/Grid';\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  padding: theme.spacing(1),\r\n  textAlign: 'center',\r\n  color: theme.palette.text.secondary,\r\n}));\r\n\r\nexport default function BasicGrid() {\r\n  return (\r\n    <Box sx={{flexGrow: 1}}>\r\n      <Grid container spacing={2}>\r\n        <Grid item xs={8}>\r\n          <Item>xs=8</Item>\r\n        </Grid>\r\n        <Grid item xs={4}>\r\n          <Item>xs=4</Item>\r\n        </Grid>\r\n        <Grid item xs={4}>\r\n          <Item>xs=4</Item>\r\n        </Grid>\r\n        <Grid item xs={8}>\r\n          <Item>xs=8</Item>\r\n        </Grid>\r\n      </Grid>\r\n    </Box>\r\n  );\r\n}\r\n",description:"Column widths are integer values between 1 and 12; they apply at any breakpoint and indicate how many columns are occupied by the component."})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"FullWidthGrid",component:h,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Box from '@mui/material/Box';\r\nimport Paper from '@mui/material/Paper';\r\nimport Grid from '@mui/material/Grid';\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  padding: theme.spacing(1),\r\n  textAlign: 'center',\r\n  color: theme.palette.text.secondary,\r\n}));\r\n\r\nexport default function FullWidthGrid() {\r\n  return (\r\n    <Box sx={{flexGrow: 1}}>\r\n      <Grid container spacing={2}>\r\n        <Grid item xs={6} md={8}>\r\n          <Item>xs=6 md=8</Item>\r\n        </Grid>\r\n        <Grid item xs={6} md={4}>\r\n          <Item>xs=6 md=4</Item>\r\n        </Grid>\r\n        <Grid item xs={6} md={4}>\r\n          <Item>xs=6 md=4</Item>\r\n        </Grid>\r\n        <Grid item xs={6} md={8}>\r\n          <Item>xs=6 md=8</Item>\r\n        </Grid>\r\n      </Grid>\r\n    </Box>\r\n  );\r\n}\r\n",description:"Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints."})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"Row And Column Spacing",component:I,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Grid from '@mui/material/Grid';\r\nimport Paper from '@mui/material/Paper';\r\nimport Box from '@mui/material/Box';\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  padding: theme.spacing(1),\r\n  textAlign: 'center',\r\n  color: theme.palette.text.secondary,\r\n}));\r\n\r\nexport default function RowAndColumnSpacing() {\r\n  return (\r\n    <Box sx={{width: '100%'}}>\r\n      <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>\r\n        <Grid item xs={6}>\r\n          <Item>1</Item>\r\n        </Grid>\r\n        <Grid item xs={6}>\r\n          <Item>2</Item>\r\n        </Grid>\r\n        <Grid item xs={6}>\r\n          <Item>3</Item>\r\n        </Grid>\r\n        <Grid item xs={6}>\r\n          <Item>4</Item>\r\n        </Grid>\r\n      </Grid>\r\n    </Box>\r\n  );\r\n}\r\n",description:"The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid."})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"Responsive Grid",component:S,source:"import * as React from 'react';\r\nimport {experimentalStyled as styled} from '@mui/material/styles';\r\nimport Box from '@mui/material/Box';\r\nimport Paper from '@mui/material/Paper';\r\nimport Grid from '@mui/material/Grid';\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  padding: theme.spacing(2),\r\n  textAlign: 'center',\r\n  color: theme.palette.text.secondary,\r\n}));\r\n\r\nexport default function ResponsiveGrid() {\r\n  return (\r\n    <Box sx={{flexGrow: 1}}>\r\n      <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>\r\n        {Array.from(Array(6)).map((_, index) => (\r\n          <Grid item xs={2} sm={4} md={4} key={index}>\r\n            <Item>xs=2</Item>\r\n          </Grid>\r\n        ))}\r\n      </Grid>\r\n    </Box>\r\n  );\r\n}\r\n",description:'You can switch the props value based on the active breakpoint. For instance, we can implement the "recommended" responsive layout grid of Material Design.'})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"Auto Grid",component:P,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Box from '@mui/material/Box';\r\nimport Paper from '@mui/material/Paper';\r\nimport Grid from '@mui/material/Grid';\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  padding: theme.spacing(1),\r\n  textAlign: 'center',\r\n  color: theme.palette.text.secondary,\r\n}));\r\n\r\nexport default function AutoGrid() {\r\n  return (\r\n    <Box sx={{flexGrow: 1}}>\r\n      <Grid container spacing={3}>\r\n        <Grid item xs>\r\n          <Item>xs</Item>\r\n        </Grid>\r\n        <Grid item xs={6}>\r\n          <Item>xs=6</Item>\r\n        </Grid>\r\n        <Grid item xs>\r\n          <Item>xs</Item>\r\n        </Grid>\r\n      </Grid>\r\n    </Box>\r\n  );\r\n}\r\n",description:"The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it."})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"Variable Width Grid ",component:A,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Box from '@mui/material/Box';\r\nimport Paper from '@mui/material/Paper';\r\nimport Grid from '@mui/material/Grid';\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  padding: theme.spacing(1),\r\n  textAlign: 'center',\r\n  color: theme.palette.text.secondary,\r\n}));\r\n\r\nexport default function VariableWidthGrid() {\r\n  return (\r\n    <Box sx={{flexGrow: 1}}>\r\n      <Grid container spacing={3}>\r\n        <Grid item xs='auto'>\r\n          <Item>variable width content</Item>\r\n        </Grid>\r\n        <Grid item xs={6}>\r\n          <Item>xs=6</Item>\r\n        </Grid>\r\n        <Grid item xs>\r\n          <Item>xs</Item>\r\n        </Grid>\r\n      </Grid>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:'Set one of the size breakpoint props to "auto" instead of true / a number to size a column based on the natural width of its content.'})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"Complex Grid ",component:F,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Grid from '@mui/material/Grid';\r\nimport Paper from '@mui/material/Paper';\r\nimport Typography from '@mui/material/Typography';\r\nimport ButtonBase from '@mui/material/ButtonBase';\r\n\r\nconst Img = styled('img')({\r\n  margin: 'auto',\r\n  display: 'block',\r\n  maxWidth: '100%',\r\n  maxHeight: '100%',\r\n});\r\n\r\nexport default function ComplexGrid() {\r\n  return (\r\n    <Paper sx={{p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1}}>\r\n      <Grid container spacing={2}>\r\n        <Grid item>\r\n          <ButtonBase sx={{width: 128, height: 128}}>\r\n            <Img alt='complex' src='/static/images/grid/complex.jpg' />\r\n          </ButtonBase>\r\n        </Grid>\r\n        <Grid item xs={12} sm container>\r\n          <Grid item xs container direction='column' spacing={2}>\r\n            <Grid item xs>\r\n              <Typography gutterBottom variant='subtitle1' component='div'>\r\n                Standard license\r\n              </Typography>\r\n              <Typography variant='body2' gutterBottom>\r\n                Full resolution 1920x1080 \u2022 JPEG\r\n              </Typography>\r\n              <Typography variant='body2' color='text.secondary'>\r\n                ID: 1030114\r\n              </Typography>\r\n            </Grid>\r\n            <Grid item>\r\n              <Typography sx={{cursor: 'pointer'}} variant='body2'>\r\n                Remove\r\n              </Typography>\r\n            </Grid>\r\n          </Grid>\r\n          <Grid item>\r\n            <Typography variant='subtitle1' component='div'>\r\n              $19.00\r\n            </Typography>\r\n          </Grid>\r\n        </Grid>\r\n      </Grid>\r\n    </Paper>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The following demo doesnt follow the Material Design guidelines but illustrates how the grid can be used to build complex layouts. "})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"FormRow ",component:N,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Box from '@mui/material/Box';\r\nimport Paper from '@mui/material/Paper';\r\nimport Grid from '@mui/material/Grid';\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  padding: theme.spacing(1),\r\n  textAlign: 'center',\r\n  color: theme.palette.text.secondary,\r\n}));\r\n\r\nfunction FormRow() {\r\n  return (\r\n    <React.Fragment>\r\n      <Grid item xs={4}>\r\n        <Item>Item</Item>\r\n      </Grid>\r\n      <Grid item xs={4}>\r\n        <Item>Item</Item>\r\n      </Grid>\r\n      <Grid item xs={4}>\r\n        <Item>Item</Item>\r\n      </Grid>\r\n    </React.Fragment>\r\n  );\r\n}\r\n\r\nexport default function NestedGrid() {\r\n  return (\r\n    <Box sx={{flexGrow: 1}}>\r\n      <Grid container spacing={1}>\r\n        <Grid container item spacing={3}>\r\n          <FormRow />\r\n        </Grid>\r\n        <Grid container item spacing={3}>\r\n          <FormRow />\r\n        </Grid>\r\n        <Grid container item spacing={3}>\r\n          <FormRow />\r\n        </Grid>\r\n      </Grid>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The following demo doesnt follow the Material Design guidelines, but illustrates how the grid can be used to build complex layouts. "})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"ColumnsGrid ",component:L,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Box from '@mui/material/Box';\r\nimport Paper from '@mui/material/Paper';\r\nimport Grid from '@mui/material/Grid';\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  padding: theme.spacing(1),\r\n  textAlign: 'center',\r\n  color: theme.palette.text.secondary,\r\n}));\r\n\r\nexport default function ColumnsGrid() {\r\n  return (\r\n    <Box sx={{flexGrow: 1}}>\r\n      <Grid container spacing={2} columns={16}>\r\n        <Grid item xs={8}>\r\n          <Item>xs=8</Item>\r\n        </Grid>\r\n        <Grid item xs={8}>\r\n          <Item>xs=8</Item>\r\n        </Grid>\r\n      </Grid>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"You can change the default number of columns (12) with the columns prop."})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"CSSGrid ",component:H,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Box from '@mui/material/Box';\r\nimport Paper from '@mui/material/Paper';\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  padding: theme.spacing(1),\r\n  textAlign: 'center',\r\n  color: theme.palette.text.secondary,\r\n}));\r\n\r\nexport default function CSSGrid() {\r\n  return (\r\n    <Box sx={{width: 1}}>\r\n      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>\r\n        <Box gridColumn='span 8'>\r\n          <Item>xs=8</Item>\r\n        </Box>\r\n        <Box gridColumn='span 4'>\r\n          <Item>xs=4</Item>\r\n        </Box>\r\n        <Box gridColumn='span 4'>\r\n          <Item>xs=4</Item>\r\n        </Box>\r\n        <Box gridColumn='span 8'>\r\n          <Item>xs=8</Item>\r\n        </Box>\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The Grid component is using CSS flexbox internally. But as seen below, you can easily use the system and CSS Grid to layout your pages."})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"Auto Grid No Wrap ",component:V,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Paper from '@mui/material/Paper';\r\nimport Grid from '@mui/material/Grid';\r\nimport Avatar from '@mui/material/Avatar';\r\nimport Typography from '@mui/material/Typography';\r\n\r\nconst message = `Truncation should be conditionally applicable on this long line of text\r\n as this is a much longer line than what the container can support. `;\r\n\r\nexport default function AutoGridNoWrap() {\r\n  return (\r\n    <Box sx={{flexGrow: 1, overflow: 'hidden', px: 3}}>\r\n      <Paper sx={{maxWidth: 400, my: 1, mx: 'auto', p: 2}}>\r\n        <Grid container wrap='nowrap' spacing={2}>\r\n          <Grid item>\r\n            <Avatar>W</Avatar>\r\n          </Grid>\r\n          <Grid item xs zeroMinWidth>\r\n            <Typography noWrap>{message}</Typography>\r\n          </Grid>\r\n        </Grid>\r\n      </Paper>\r\n      <Paper sx={{maxWidth: 400, my: 1, mx: 'auto', p: 2}}>\r\n        <Grid container wrap='nowrap' spacing={2}>\r\n          <Grid item>\r\n            <Avatar>W</Avatar>\r\n          </Grid>\r\n          <Grid item xs>\r\n            <Typography noWrap>{message}</Typography>\r\n          </Grid>\r\n        </Grid>\r\n      </Paper>\r\n      <Paper sx={{maxWidth: 400, my: 1, mx: 'auto', p: 2}}>\r\n        <Grid container wrap='nowrap' spacing={2}>\r\n          <Grid item>\r\n            <Avatar>W</Avatar>\r\n          </Grid>\r\n          <Grid item xs>\r\n            <Typography>{message}</Typography>\r\n          </Grid>\r\n        </Grid>\r\n      </Paper>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"In order for the item to stay within the container you need to set min-width: 0. In practice, you can set the zeroMinWidth prop:"})}),Object(p.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(o.a,{title:"Spacing Grid",component:v,source:"import * as React from 'react';\r\nimport Grid from '@mui/material/Grid';\r\nimport FormLabel from '@mui/material/FormLabel';\r\nimport FormControl from '@mui/material/FormControl';\r\nimport FormControlLabel from '@mui/material/FormControlLabel';\r\nimport RadioGroup from '@mui/material/RadioGroup';\r\nimport Radio from '@mui/material/Radio';\r\nimport Paper from '@mui/material/Paper';\r\n\r\nexport default function SpacingGrid() {\r\n  const [spacing, setSpacing] = React.useState(2);\r\n\r\n  const handleChange = (event) => {\r\n    setSpacing(Number(event.target.value));\r\n  };\r\n\r\n  return (\r\n    <Grid sx={{flexGrow: 1}} container spacing={2}>\r\n      <Grid item xs={12}>\r\n        <Grid container justifyContent='center' spacing={spacing}>\r\n          {[0, 1, 2].map((value) => (\r\n            <Grid key={value} item>\r\n              <Paper sx={{height: 140, width: 100}} />\r\n            </Grid>\r\n          ))}\r\n        </Grid>\r\n      </Grid>\r\n      <Grid item xs={12}>\r\n        <Paper sx={{p: 2}}>\r\n          <Grid container>\r\n            <Grid item>\r\n              <FormControl component='fieldset'>\r\n                <FormLabel component='legend'>spacing</FormLabel>\r\n                <RadioGroup\r\n                  name='spacing'\r\n                  aria-label='spacing'\r\n                  value={spacing.toString()}\r\n                  onChange={handleChange}\r\n                  row\r\n                >\r\n                  {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (\r\n                    <FormControlLabel\r\n                      key={value}\r\n                      value={value.toString()}\r\n                      control={<Radio />}\r\n                      label={value.toString()}\r\n                    />\r\n                  ))}\r\n                </RadioGroup>\r\n              </FormControl>\r\n            </Grid>\r\n          </Grid>\r\n        </Paper>\r\n      </Grid>\r\n    </Grid>\r\n  );\r\n}\r\n",description:"To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the theme.spacing() helper."})})]})]})}}}]);
//# sourceMappingURL=83.e1c35a5d.chunk.js.map