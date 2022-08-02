(this.webpackJsonphister=this.webpackJsonphister||[]).push([[53],{1615:function(n,e,r){"use strict";var t=r(6),o=r(13),a=r(3),i=r(2),c=(r(8),r(151)),d=r(175),l=r(1441),s=r(465),u=r(17),b=r(25),p=r(1),m=["component","direction","spacing","divider","children"];function g(n,e){var r=i.Children.toArray(n).filter(Boolean);return r.reduce((function(n,t,o){return n.push(t),o<r.length-1&&n.push(i.cloneElement(e,{key:"separator-".concat(o)})),n}),[])}var f=Object(u.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(n,e){return[e.root]}})((function(n){var e=n.ownerState,r=n.theme,o=Object(a.a)({display:"flex"},Object(c.b)({theme:r},Object(c.d)({values:e.direction,breakpoints:r.breakpoints.values}),(function(n){return{flexDirection:n}})));if(e.spacing){var i=Object(d.a)(r),l=Object.keys(r.breakpoints.values).reduce((function(n,r){return null==e.spacing[r]&&null==e.direction[r]||(n[r]=!0),n}),{}),u=Object(c.d)({values:e.direction,base:l}),b=Object(c.d)({values:e.spacing,base:l});o=Object(s.a)(o,Object(c.b)({theme:r},b,(function(n,r){return{"& > :not(style) + :not(style)":Object(t.a)({margin:0},"margin".concat((o=r?u[r]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),Object(d.d)(i,n))};var o})))}return o})),h=i.forwardRef((function(n,e){var r=Object(b.a)({props:n,name:"MuiStack"}),t=Object(l.a)(r),i=t.component,c=void 0===i?"div":i,d=t.direction,s=void 0===d?"column":d,u=t.spacing,h=void 0===u?0:u,j=t.divider,x=t.children,v=Object(o.a)(t,m),O={direction:s,spacing:h};return Object(p.jsx)(f,Object(a.a)({as:c,ownerState:O,ref:e},v,{children:j?g(x,j):x}))}));e.a=h},1617:function(n,e,r){"use strict";var t=r(66);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(r(94)),a=r(1),i=(0,o.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.default=i},1618:function(n,e,r){"use strict";var t=r(66);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(r(94)),a=r(1),i=(0,o.default)((0,a.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");e.default=i},1765:function(n,e,r){"use strict";var t=r(616),o=Object(t.a)();e.a=o},1808:function(n,e,r){"use strict";var t=r(66);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(r(94)),a=r(1),i=(0,o.default)((0,a.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");e.default=i},1881:function(n,e,r){"use strict";var t=r(1013),o=Object(t.a)();e.a=o},2032:function(n,e,r){"use strict";var t=r(66);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(r(94)),a=r(1),i=(0,o.default)((0,a.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"ShoppingCart");e.default=i},2193:function(n,e,r){"use strict";var t=r(6),o=r(13),a=r(3),i=r(2),c=(r(8),r(12)),d=r(153),l=r(145),s=r(18),u=r(17),b=r(25),p=r(101),m=r(98);function g(n){return Object(p.a)("MuiButtonGroup",n)}var f=Object(m.a)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),h=r(757),j=r(1),x=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],v=Object(u.a)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[Object(t.a)({},"& .".concat(f.grouped),e.grouped),Object(t.a)({},"& .".concat(f.grouped),e["grouped".concat(Object(s.a)(r.orientation))]),Object(t.a)({},"& .".concat(f.grouped),e["grouped".concat(Object(s.a)(r.variant))]),Object(t.a)({},"& .".concat(f.grouped),e["grouped".concat(Object(s.a)(r.variant)).concat(Object(s.a)(r.orientation))]),Object(t.a)({},"& .".concat(f.grouped),e["grouped".concat(Object(s.a)(r.variant)).concat(Object(s.a)(r.color))]),e.root,e[r.variant],!0===r.disableElevation&&e.disableElevation,r.fullWidth&&e.fullWidth,"vertical"===r.orientation&&e.vertical]}})((function(n){var e=n.theme,r=n.ownerState;return Object(a.a)({display:"inline-flex",borderRadius:e.shape.borderRadius},"contained"===r.variant&&{boxShadow:e.shadows[2]},r.disableElevation&&{boxShadow:"none"},r.fullWidth&&{width:"100%"},"vertical"===r.orientation&&{flexDirection:"column"},Object(t.a)({},"& .".concat(f.grouped),Object(a.a)({minWidth:40,"&:not(:first-of-type)":Object(a.a)({},"horizontal"===r.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===r.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===r.variant&&"horizontal"===r.orientation&&{marginLeft:-1},"outlined"===r.variant&&"vertical"===r.orientation&&{marginTop:-1}),"&:not(:last-of-type)":Object(a.a)({},"horizontal"===r.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===r.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===r.variant&&"horizontal"===r.orientation&&{borderRight:"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===r.variant&&"vertical"===r.orientation&&{borderBottom:"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===r.variant&&"inherit"!==r.color&&{borderColor:Object(l.a)(e.palette[r.color].main,.5)},"outlined"===r.variant&&"horizontal"===r.orientation&&{borderRightColor:"transparent"},"outlined"===r.variant&&"vertical"===r.orientation&&{borderBottomColor:"transparent"},"contained"===r.variant&&"horizontal"===r.orientation&&Object(t.a)({borderRight:"1px solid ".concat(e.palette.grey[400])},"&.".concat(f.disabled),{borderRight:"1px solid ".concat(e.palette.action.disabled)}),"contained"===r.variant&&"vertical"===r.orientation&&Object(t.a)({borderBottom:"1px solid ".concat(e.palette.grey[400])},"&.".concat(f.disabled),{borderBottom:"1px solid ".concat(e.palette.action.disabled)}),"contained"===r.variant&&"inherit"!==r.color&&{borderColor:e.palette[r.color].dark},{"&:hover":Object(a.a)({},"outlined"===r.variant&&"horizontal"===r.orientation&&{borderRightColor:"currentColor"},"outlined"===r.variant&&"vertical"===r.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":Object(a.a)({},"contained"===r.variant&&{boxShadow:"none"})},"contained"===r.variant&&{boxShadow:"none"})))})),O=i.forwardRef((function(n,e){var r=Object(b.a)({props:n,name:"MuiButtonGroup"}),t=r.children,l=r.className,u=r.color,p=void 0===u?"primary":u,m=r.component,f=void 0===m?"div":m,O=r.disabled,B=void 0!==O&&O,y=r.disableElevation,S=void 0!==y&&y,C=r.disableFocusRipple,R=void 0!==C&&C,M=r.disableRipple,w=void 0!==M&&M,z=r.fullWidth,k=void 0!==z&&z,I=r.orientation,T=void 0===I?"horizontal":I,E=r.size,A=void 0===E?"medium":E,H=r.variant,U=void 0===H?"outlined":H,L=Object(o.a)(r,x),W=Object(a.a)({},r,{color:p,component:f,disabled:B,disableElevation:S,disableFocusRipple:R,disableRipple:w,fullWidth:k,orientation:T,size:A,variant:U}),F=function(n){var e=n.classes,r=n.color,t=n.disabled,o=n.disableElevation,a=n.fullWidth,i=n.orientation,c=n.variant,l={root:["root",c,"vertical"===i&&"vertical",a&&"fullWidth",o&&"disableElevation"],grouped:["grouped","grouped".concat(Object(s.a)(i)),"grouped".concat(Object(s.a)(c)),"grouped".concat(Object(s.a)(c)).concat(Object(s.a)(i)),"grouped".concat(Object(s.a)(c)).concat(Object(s.a)(r)),t&&"disabled"]};return Object(d.a)(l,g,e)}(W),V=i.useMemo((function(){return{className:F.grouped,color:p,disabled:B,disableElevation:S,disableFocusRipple:R,disableRipple:w,fullWidth:k,size:A,variant:U}}),[p,B,S,R,w,k,A,U,F.grouped]);return Object(j.jsx)(v,Object(a.a)({as:f,role:"group",className:Object(c.default)(F.root,l),ref:e,ownerState:W},L,{children:Object(j.jsx)(h.a.Provider,{value:V,children:t})}))}));e.a=O},2311:function(n,e,r){"use strict";r.r(e);var t=r(2),o=r(72),a=r(60),i=r(1458),c=r(38),d=r(1563),l=r(1618),s=r.n(l),u=r(1);function b(){return Object(u.jsx)(d.a,{badgeContent:4,color:"primary",children:Object(u.jsx)(s.a,{color:"action"})})}var p=r(1615);function m(){return Object(u.jsxs)(p.a,{spacing:2,direction:"row",children:[Object(u.jsx)(d.a,{badgeContent:4,color:"secondary",children:Object(u.jsx)(s.a,{color:"action"})}),Object(u.jsx)(d.a,{badgeContent:4,color:"success",children:Object(u.jsx)(s.a,{color:"action"})})]})}var g=r(17),f=r(718),h=r(2032),j=r.n(h),x=Object(g.a)(d.a)((function(n){var e=n.theme;return{"& .MuiBadge-badge":{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"}}}));function v(){return Object(u.jsx)(f.a,{"aria-label":"cart",children:Object(u.jsx)(x,{badgeContent:4,color:"secondary",children:Object(u.jsx)(j.a,{})})})}var O=r(14),B=r(206),y=r(2193),S=r(719),C=r(1617),R=r.n(C),M=r(1808),w=r.n(M),z=r(1559),k=r(1585);function I(){var n=t.useState(1),e=Object(O.a)(n,2),r=e[0],o=e[1],a=t.useState(!1),i=Object(O.a)(a,2),c=i[0],l=i[1];return Object(u.jsxs)(B.a,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(d.a,{color:"secondary",badgeContent:r,children:Object(u.jsx)(s.a,{})}),Object(u.jsxs)(y.a,{children:[Object(u.jsx)(S.a,{"aria-label":"reduce",onClick:function(){o(Math.max(r-1,0))},children:Object(u.jsx)(w.a,{fontSize:"small"})}),Object(u.jsx)(S.a,{"aria-label":"increase",onClick:function(){o(r+1)},children:Object(u.jsx)(R.a,{fontSize:"small"})})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(d.a,{color:"secondary",variant:"dot",invisible:c,children:Object(u.jsx)(s.a,{})}),Object(u.jsx)(k.a,{sx:{color:"text.primary"},control:Object(u.jsx)(z.a,{checked:!c,onChange:function(){l(!c)}}),label:"Show Badge"})]})]})}function T(){return Object(u.jsxs)(p.a,{spacing:4,direction:"row",sx:{color:"action.active"},children:[Object(u.jsx)(d.a,{color:"secondary",badgeContent:99,children:Object(u.jsx)(s.a,{})}),Object(u.jsx)(d.a,{color:"secondary",badgeContent:100,children:Object(u.jsx)(s.a,{})}),Object(u.jsx)(d.a,{color:"secondary",badgeContent:1e3,max:999,children:Object(u.jsx)(s.a,{})})]})}function E(){return Object(u.jsx)(B.a,{sx:{color:"action.active"},children:Object(u.jsx)(d.a,{color:"secondary",variant:"dot",children:Object(u.jsx)(s.a,{})})})}var A=r(5),H={bgcolor:"primary.main",width:40,height:40},U=Object(u.jsx)(B.a,{component:"span",sx:H}),L=Object(u.jsx)(B.a,{component:"span",sx:Object(A.a)(Object(A.a)({},H),{borderRadius:"50%"})});function W(){return Object(u.jsxs)(p.a,{spacing:3,direction:"row",children:[Object(u.jsx)(d.a,{color:"secondary",badgeContent:" ",children:U}),Object(u.jsx)(d.a,{color:"secondary",badgeContent:" ",variant:"dot",children:U}),Object(u.jsx)(d.a,{color:"secondary",overlap:"circular",badgeContent:" ",children:L}),Object(u.jsx)(d.a,{color:"secondary",overlap:"circular",badgeContent:" ",variant:"dot",children:L})]})}var F,V=r(147),G=r(1765),P=r(1881),_=r(1471),D=Object(G.a)(_.a)(F||(F=Object(V.a)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n    'Segoe UI Symbol';\n  position: relative;\n  display: inline-block;\n  line-height: 1;\n\n  & .MuiBadge-badge {\n    z-index: auto;\n    min-width: 20px;\n    height: 20px;\n    padding: 0 6px;\n    color: #fff;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 20px;\n    white-space: nowrap;\n    text-align: center;\n    background: #ff4d4f;\n    border-radius: 10px;\n    box-shadow: 0 0 0 1px #fff;\n  }\n\n  & .MuiBadge-dot {\n    padding: 0;\n    z-index: auto;\n    min-width: 6px;\n    width: 6px;\n    height: 6px;\n    background: #ff4d4f;\n    border-radius: 100%;\n    box-shadow: 0 0 0 1px #fff;\n  }\n\n  & .MuiBadge-anchorOriginTopRightCircular {\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(50%, -50%);\n    transform-origin: 100% 0;\n  }\n"])));function N(){return Object(u.jsx)(P.a,{component:"span",sx:{width:42,height:42,borderRadius:"2px",background:"#eee",display:"inline-block",verticalAlign:"middle"}})}function Y(){return Object(u.jsxs)(P.a,{sx:{"& > :not(style) + :not(style)":{ml:4}},children:[Object(u.jsx)(D,{badgeContent:5,overlap:"circular",children:Object(u.jsx)(N,{})}),Object(u.jsx)(D,{badgeContent:5,variant:"dot",overlap:"circular",children:Object(u.jsx)(N,{})})]})}function J(){return Object(u.jsx)(f.a,{"aria-label":(n=100,0===n?"no notifications":n>99?"more than 99 notifications":"".concat(n," notifications")),children:Object(u.jsx)(d.a,{badgeContent:100,color:"secondary",children:Object(u.jsx)(s.a,{})})});var n}e.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a,{title:"Badge",description:"Badge generates a small badge to the top-right of its child(ren).",refUrl:"https://mui.com/components/badges/"}),Object(u.jsxs)(a.a,{children:[Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Basic badge",component:b,source:"import * as React from 'react';\r\nimport Badge from '@mui/material/Badge';\r\nimport MailIcon from '@mui/icons-material/Mail';\r\n\r\nexport default function SimpleBadge() {\r\n  return (\r\n    <Badge badgeContent={4} color='primary'>\r\n      <MailIcon color='action' />\r\n    </Badge>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Examples of badges containing text, using primary and secondary colors. The badge is applied to its children."})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Color",component:m,source:"import * as React from 'react';\r\nimport Badge from '@mui/material/Badge';\r\nimport Stack from '@mui/material/Stack';\r\nimport MailIcon from '@mui/icons-material/Mail';\r\n\r\nexport default function ColorBadge() {\r\n  return (\r\n    <Stack spacing={2} direction='row'>\r\n      <Badge badgeContent={4} color='secondary'>\r\n        <MailIcon color='action' />\r\n      </Badge>\r\n      <Badge badgeContent={4} color='success'>\r\n        <MailIcon color='action' />\r\n      </Badge>\r\n    </Stack>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Use color prop to apply theme palette to component."})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Customization",component:v,source:"import * as React from 'react';\r\nimport Badge from '@mui/material/Badge';\r\nimport {styled} from '@mui/material/styles';\r\nimport IconButton from '@mui/material/IconButton';\r\nimport ShoppingCartIcon from '@mui/icons-material/ShoppingCart';\r\n\r\nconst StyledBadge = styled(Badge)(({theme}) => ({\r\n  '& .MuiBadge-badge': {\r\n    right: -3,\r\n    top: 13,\r\n    border: `2px solid ${theme.palette.background.paper}`,\r\n    padding: '0 4px',\r\n  },\r\n}));\r\n\r\nexport default function CustomizedBadges() {\r\n  return (\r\n    <IconButton aria-label='cart'>\r\n      <StyledBadge badgeContent={4} color='secondary'>\r\n        <ShoppingCartIcon />\r\n      </StyledBadge>\r\n    </IconButton>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Here is an example of customizing the component. You can learn more about this in the overrides documentation page."})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Badge visibility",component:I,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Badge from '@mui/material/Badge';\r\nimport ButtonGroup from '@mui/material/ButtonGroup';\r\nimport Button from '@mui/material/Button';\r\nimport AddIcon from '@mui/icons-material/Add';\r\nimport RemoveIcon from '@mui/icons-material/Remove';\r\nimport MailIcon from '@mui/icons-material/Mail';\r\nimport Switch from '@mui/material/Switch';\r\nimport FormControlLabel from '@mui/material/FormControlLabel';\r\n\r\nexport default function BadgeVisibility() {\r\n  const [count, setCount] = React.useState(1);\r\n  const [invisible, setInvisible] = React.useState(false);\r\n\r\n  const handleBadgeVisibility = () => {\r\n    setInvisible(!invisible);\r\n  };\r\n\r\n  return (\r\n    <Box\r\n      sx={{\r\n        color: 'action.active',\r\n        display: 'flex',\r\n        flexDirection: 'column',\r\n        '& > *': {\r\n          marginBottom: 2,\r\n        },\r\n        '& .MuiBadge-root': {\r\n          marginRight: 4,\r\n        },\r\n      }}\r\n    >\r\n      <div>\r\n        <Badge color='secondary' badgeContent={count}>\r\n          <MailIcon />\r\n        </Badge>\r\n        <ButtonGroup>\r\n          <Button\r\n            aria-label='reduce'\r\n            onClick={() => {\r\n              setCount(Math.max(count - 1, 0));\r\n            }}\r\n          >\r\n            <RemoveIcon fontSize='small' />\r\n          </Button>\r\n          <Button\r\n            aria-label='increase'\r\n            onClick={() => {\r\n              setCount(count + 1);\r\n            }}\r\n          >\r\n            <AddIcon fontSize='small' />\r\n          </Button>\r\n        </ButtonGroup>\r\n      </div>\r\n      <div>\r\n        <Badge color='secondary' variant='dot' invisible={invisible}>\r\n          <MailIcon />\r\n        </Badge>\r\n        <FormControlLabel\r\n          sx={{color: 'text.primary'}}\r\n          control={\r\n            <Switch checked={!invisible} onChange={handleBadgeVisibility} />\r\n          }\r\n          label='Show Badge'\r\n        />\r\n      </div>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The visibility of badges can be controlled using the invisible prop."})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Maximum value",component:T,source:"import * as React from 'react';\r\nimport Stack from '@mui/material/Stack';\r\nimport Badge from '@mui/material/Badge';\r\nimport MailIcon from '@mui/icons-material/Mail';\r\n\r\nexport default function BadgeMax() {\r\n  return (\r\n    <Stack spacing={4} direction='row' sx={{color: 'action.active'}}>\r\n      <Badge color='secondary' badgeContent={99}>\r\n        <MailIcon />\r\n      </Badge>\r\n      <Badge color='secondary' badgeContent={100}>\r\n        <MailIcon />\r\n      </Badge>\r\n      <Badge color='secondary' badgeContent={1000} max={999}>\r\n        <MailIcon />\r\n      </Badge>\r\n    </Stack>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"You can use the max prop to cap the value of the badge content."})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Dot badge",component:E,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Badge from '@mui/material/Badge';\r\nimport MailIcon from '@mui/icons-material/Mail';\r\n\r\nexport default function DotBadge() {\r\n  return (\r\n    <Box sx={{color: 'action.active'}}>\r\n      <Badge color='secondary' variant='dot'>\r\n        <MailIcon />\r\n      </Badge>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The dot prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count."})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Badge overlap",component:W,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Stack from '@mui/material/Stack';\r\nimport Badge from '@mui/material/Badge';\r\n\r\nconst shapeStyles = {bgcolor: 'primary.main', width: 40, height: 40};\r\nconst shapeCircleStyles = {borderRadius: '50%'};\r\nconst rectangle = <Box component='span' sx={shapeStyles} />;\r\nconst circle = (\r\n  <Box component='span' sx={{...shapeStyles, ...shapeCircleStyles}} />\r\n);\r\n\r\nexport default function BadgeOverlap() {\r\n  return (\r\n    <Stack spacing={3} direction='row'>\r\n      <Badge color='secondary' badgeContent=' '>\r\n        {rectangle}\r\n      </Badge>\r\n      <Badge color='secondary' badgeContent=' ' variant='dot'>\r\n        {rectangle}\r\n      </Badge>\r\n      <Badge color='secondary' overlap='circular' badgeContent=' '>\r\n        {circle}\r\n      </Badge>\r\n      <Badge\r\n        color='secondary'\r\n        overlap='circular'\r\n        badgeContent=' '\r\n        variant='dot'\r\n      >\r\n        {circle}\r\n      </Badge>\r\n    </Stack>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"You can use the overlap prop to place the badge relative to the corner of the wrapped element."})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Unstyled",component:Y,source:"import * as React from 'react';\r\nimport {styled, Box} from '@mui/system';\r\nimport BadgeUnstyled from '@mui/base/BadgeUnstyled';\r\n\r\nconst StyledBadge = styled(BadgeUnstyled)`\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: rgba(0, 0, 0, 0.85);\r\n  font-size: 14px;\r\n  font-variant: tabular-nums;\r\n  list-style: none;\r\n  font-feature-settings: 'tnum';\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\r\n    'Segoe UI Symbol';\r\n  position: relative;\r\n  display: inline-block;\r\n  line-height: 1;\r\n\r\n  & .MuiBadge-badge {\r\n    z-index: auto;\r\n    min-width: 20px;\r\n    height: 20px;\r\n    padding: 0 6px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    background: #ff4d4f;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 0 1px #fff;\r\n  }\r\n\r\n  & .MuiBadge-dot {\r\n    padding: 0;\r\n    z-index: auto;\r\n    min-width: 6px;\r\n    width: 6px;\r\n    height: 6px;\r\n    background: #ff4d4f;\r\n    border-radius: 100%;\r\n    box-shadow: 0 0 0 1px #fff;\r\n  }\r\n\r\n  & .MuiBadge-anchorOriginTopRightCircular {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    transform: translate(50%, -50%);\r\n    transform-origin: 100% 0;\r\n  }\r\n`;\r\n\r\nfunction BadgeContent() {\r\n  return (\r\n    <Box\r\n      component='span'\r\n      sx={{\r\n        width: 42,\r\n        height: 42,\r\n        borderRadius: '2px',\r\n        background: '#eee',\r\n        display: 'inline-block',\r\n        verticalAlign: 'middle',\r\n      }}\r\n    />\r\n  );\r\n}\r\n\r\nexport default function UnstyledBadge() {\r\n  return (\r\n    <Box sx={{'& > :not(style) + :not(style)': {ml: 4}}}>\r\n      <StyledBadge badgeContent={5} overlap='circular'>\r\n        <BadgeContent />\r\n      </StyledBadge>\r\n      <StyledBadge badgeContent={5} variant='dot' overlap='circular'>\r\n        <BadgeContent />\r\n      </StyledBadge>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The badge also comes with an unstyled version. It ideal for doing heavy customizations and minimizing bundle size."})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Accessibility",component:J,source:"import * as React from 'react';\r\nimport IconButton from '@mui/material/IconButton';\r\nimport Badge from '@mui/material/Badge';\r\nimport MailIcon from '@mui/icons-material/Mail';\r\n\r\nfunction notificationsLabel(count) {\r\n  if (count === 0) {\r\n    return 'no notifications';\r\n  }\r\n  if (count > 99) {\r\n    return 'more than 99 notifications';\r\n  }\r\n  return `${count} notifications`;\r\n}\r\n\r\nexport default function AccessibleBadges() {\r\n  return (\r\n    <IconButton aria-label={notificationsLabel(100)}>\r\n      <Badge badgeContent={100} color='secondary'>\r\n        <MailIcon />\r\n      </Badge>\r\n    </IconButton>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"You can not rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with aria-label:"})})]})]})}}}]);
//# sourceMappingURL=53.aac67f43.chunk.js.map