(this.webpackJsonphister=this.webpackJsonphister||[]).push([[157],{2343:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(72),i=t(60),a=t(1458),c=t(38),s=t(14),l=t(206),p=t(720),u=t(1);function d(){var e=r.useState(null),n=Object(s.a)(e,2),t=n[0],o=n[1],i=Boolean(t),a=i?"simple-popper":void 0;return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{"aria-describedby":a,type:"button",onClick:function(e){o(t?null:e.currentTarget)},children:"Toggle Popper"}),Object(u.jsx)(p.a,{id:a,open:i,anchorEl:t,children:Object(u.jsx)(l.a,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})})]})}var m=t(5),h=t(980);function b(){var e=r.useState(!1),n=Object(s.a)(e,2),t=n[0],o=n[1],i=r.useState(null),a=Object(s.a)(i,2),c=a[0],d=a[1],b=t&&Boolean(c)?"transition-popper":void 0;return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{"aria-describedby":b,type:"button",onClick:function(e){d(e.currentTarget),o((function(e){return!e}))},children:"Toggle Popper"}),Object(u.jsx)(p.a,{id:b,open:t,anchorEl:c,transition:!0,children:function(e){var n=e.TransitionProps;return Object(u.jsx)(h.a,Object(m.a)(Object(m.a)({},n),{},{timeout:350,children:Object(u.jsx)(l.a,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})}))}})]})}var j=t(223),f=t(719),x=t(604);function O(){var e=r.useState(null),n=Object(s.a)(e,2),t=n[0],o=n[1],i=r.useState(!1),c=Object(s.a)(i,2),d=c[0],b=c[1],O=r.useState(),g=Object(s.a)(O,2),P=g[0],C=g[1],v=function(e){return function(n){o(n.currentTarget),b((function(n){return P!==e||!n})),C(e)}};return Object(u.jsxs)(l.a,{sx:{width:500},children:[Object(u.jsx)(p.a,{open:d,anchorEl:t,placement:P,transition:!0,children:function(e){var n=e.TransitionProps;return Object(u.jsx)(h.a,Object(m.a)(Object(m.a)({},n),{},{timeout:350,children:Object(u.jsx)(x.a,{children:Object(u.jsx)(j.a,{sx:{p:2},children:"The content of the Popper."})})}))}}),Object(u.jsx)(a.a,{container:!0,justifyContent:"center",children:Object(u.jsxs)(a.a,{item:!0,children:[Object(u.jsx)(f.a,{onClick:v("top-start"),children:"top-start"}),Object(u.jsx)(f.a,{onClick:v("top"),children:"top"}),Object(u.jsx)(f.a,{onClick:v("top-end"),children:"top-end"})]})}),Object(u.jsxs)(a.a,{container:!0,justifyContent:"center",children:[Object(u.jsxs)(a.a,{item:!0,xs:6,children:[Object(u.jsx)(f.a,{onClick:v("left-start"),children:"left-start"}),Object(u.jsx)("br",{}),Object(u.jsx)(f.a,{onClick:v("left"),children:"left"}),Object(u.jsx)("br",{}),Object(u.jsx)(f.a,{onClick:v("left-end"),children:"left-end"})]}),Object(u.jsxs)(a.a,{item:!0,container:!0,xs:6,alignItems:"flex-end",direction:"column",children:[Object(u.jsx)(a.a,{item:!0,children:Object(u.jsx)(f.a,{onClick:v("right-start"),children:"right-start"})}),Object(u.jsx)(a.a,{item:!0,children:Object(u.jsx)(f.a,{onClick:v("right"),children:"right"})}),Object(u.jsx)(a.a,{item:!0,children:Object(u.jsx)(f.a,{onClick:v("right-end"),children:"right-end"})})]})]}),Object(u.jsx)(a.a,{container:!0,justifyContent:"center",children:Object(u.jsxs)(a.a,{item:!0,children:[Object(u.jsx)(f.a,{onClick:v("bottom-start"),children:"bottom-start"}),Object(u.jsx)(f.a,{onClick:v("bottom"),children:"bottom"}),Object(u.jsx)(f.a,{onClick:v("bottom-end"),children:"bottom-end"})]})})]})}function g(){var e=r.useState(!1),n=Object(s.a)(e,2),t=n[0],o=n[1],i=r.useState(null),a=Object(s.a)(i,2),c=a[0],l=a[1],d=function(){o(!1)},b=t?"virtual-element-popper":void 0;return Object(u.jsxs)("div",{onMouseLeave:d,children:[Object(u.jsx)(j.a,{"aria-describedby":b,onMouseUp:function(){var e=window.getSelection();if(e&&e.anchorOffset!==e.focusOffset){o(!0),l({getBoundingClientRect:function(){return e.getRangeAt(0).getBoundingClientRect()}})}else d()},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus."}),Object(u.jsx)(p.a,{id:b,open:t,anchorEl:c,transition:!0,placement:"bottom-start",children:function(e){var n=e.TransitionProps;return Object(u.jsx)(h.a,Object(m.a)(Object(m.a)({},n),{},{timeout:350,children:Object(u.jsx)(x.a,{children:Object(u.jsx)(j.a,{sx:{p:2},children:"The content of the Popper."})})}))}})]})}n.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a,{title:"Popper",description:"A Popper can be used to display some content on top of another. Its an alternative to react-popper.",refUrl:"https://mui.com/components/popper/"}),Object(u.jsxs)(i.a,{children:[Object(u.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Simple Popper",component:d,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Popper from '@mui/material/Popper';\r\n\r\nexport default function SimplePopper() {\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n\r\n  const handleClick = (event) => {\r\n    setAnchorEl(anchorEl ? null : event.currentTarget);\r\n  };\r\n\r\n  const open = Boolean(anchorEl);\r\n  const id = open ? 'simple-popper' : undefined;\r\n\r\n  return (\r\n    <div>\r\n      <button aria-describedby={id} type='button' onClick={handleClick}>\r\n        Toggle Popper\r\n      </button>\r\n      <Popper id={id} open={open} anchorEl={anchorEl}>\r\n        <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>\r\n          The content of the Popper.\r\n        </Box>\r\n      </Popper>\r\n    </div>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Transitions Popper",component:b,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Popper from '@mui/material/Popper';\r\nimport Fade from '@mui/material/Fade';\r\n\r\nexport default function TransitionsPopper() {\r\n  const [open, setOpen] = React.useState(false);\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n\r\n  const handleClick = (event) => {\r\n    setAnchorEl(event.currentTarget);\r\n    setOpen((previousOpen) => !previousOpen);\r\n  };\r\n\r\n  const canBeOpen = open && Boolean(anchorEl);\r\n  const id = canBeOpen ? 'transition-popper' : undefined;\r\n\r\n  return (\r\n    <div>\r\n      <button aria-describedby={id} type='button' onClick={handleClick}>\r\n        Toggle Popper\r\n      </button>\r\n      <Popper id={id} open={open} anchorEl={anchorEl} transition>\r\n        {({TransitionProps}) => (\r\n          <Fade {...TransitionProps} timeout={350}>\r\n            <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>\r\n              The content of the Popper.\r\n            </Box>\r\n          </Fade>\r\n        )}\r\n      </Popper>\r\n    </div>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Popper has built-in support for react-transition-group."})}),Object(u.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Positioned Popper",component:O,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Popper from '@mui/material/Popper';\r\nimport Typography from '@mui/material/Typography';\r\nimport Grid from '@mui/material/Grid';\r\nimport Button from '@mui/material/Button';\r\nimport Fade from '@mui/material/Fade';\r\nimport Paper from '@mui/material/Paper';\r\n\r\nexport default function PositionedPopper() {\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n  const [open, setOpen] = React.useState(false);\r\n  const [placement, setPlacement] = React.useState();\r\n\r\n  const handleClick = (newPlacement) => (event) => {\r\n    setAnchorEl(event.currentTarget);\r\n    setOpen((prev) => placement !== newPlacement || !prev);\r\n    setPlacement(newPlacement);\r\n  };\r\n\r\n  return (\r\n    <Box sx={{width: 500}}>\r\n      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>\r\n        {({TransitionProps}) => (\r\n          <Fade {...TransitionProps} timeout={350}>\r\n            <Paper>\r\n              <Typography sx={{p: 2}}>The content of the Popper.</Typography>\r\n            </Paper>\r\n          </Fade>\r\n        )}\r\n      </Popper>\r\n      <Grid container justifyContent='center'>\r\n        <Grid item>\r\n          <Button onClick={handleClick('top-start')}>top-start</Button>\r\n          <Button onClick={handleClick('top')}>top</Button>\r\n          <Button onClick={handleClick('top-end')}>top-end</Button>\r\n        </Grid>\r\n      </Grid>\r\n      <Grid container justifyContent='center'>\r\n        <Grid item xs={6}>\r\n          <Button onClick={handleClick('left-start')}>left-start</Button>\r\n          <br />\r\n          <Button onClick={handleClick('left')}>left</Button>\r\n          <br />\r\n          <Button onClick={handleClick('left-end')}>left-end</Button>\r\n        </Grid>\r\n        <Grid item container xs={6} alignItems='flex-end' direction='column'>\r\n          <Grid item>\r\n            <Button onClick={handleClick('right-start')}>right-start</Button>\r\n          </Grid>\r\n          <Grid item>\r\n            <Button onClick={handleClick('right')}>right</Button>\r\n          </Grid>\r\n          <Grid item>\r\n            <Button onClick={handleClick('right-end')}>right-end</Button>\r\n          </Grid>\r\n        </Grid>\r\n      </Grid>\r\n      <Grid container justifyContent='center'>\r\n        <Grid item>\r\n          <Button onClick={handleClick('bottom-start')}>bottom-start</Button>\r\n          <Button onClick={handleClick('bottom')}>bottom</Button>\r\n          <Button onClick={handleClick('bottom-end')}>bottom-end</Button>\r\n        </Grid>\r\n      </Grid>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(a.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(c.a,{title:"Virtual Element Popper",component:g,source:"import * as React from 'react';\r\nimport Popper from '@mui/material/Popper';\r\nimport Typography from '@mui/material/Typography';\r\nimport Fade from '@mui/material/Fade';\r\nimport Paper from '@mui/material/Paper';\r\n\r\nexport default function VirtualElementPopper() {\r\n  const [open, setOpen] = React.useState(false);\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n\r\n  const handleClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  const handleMouseUp = () => {\r\n    const selection = window.getSelection();\r\n\r\n    // Resets when the selection has a length of 0\r\n    if (!selection || selection.anchorOffset === selection.focusOffset) {\r\n      handleClose();\r\n      return;\r\n    }\r\n\r\n    const getBoundingClientRect = () =>\r\n      selection.getRangeAt(0).getBoundingClientRect();\r\n\r\n    setOpen(true);\r\n    setAnchorEl({\r\n      getBoundingClientRect,\r\n    });\r\n  };\r\n\r\n  const id = open ? 'virtual-element-popper' : undefined;\r\n\r\n  return (\r\n    <div onMouseLeave={handleClose}>\r\n      <Typography aria-describedby={id} onMouseUp={handleMouseUp}>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum\r\n        purus, bibendum sit amet vulputate eget, porta semper ligula. Donec\r\n        bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed\r\n        dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam\r\n        quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci,\r\n        quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus\r\n        finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan\r\n        metus vel maximus consequat. Suspendisse lacinia tellus a libero\r\n        volutpat maximus.\r\n      </Typography>\r\n      <Popper\r\n        id={id}\r\n        open={open}\r\n        anchorEl={anchorEl}\r\n        transition\r\n        placement='bottom-start'\r\n      >\r\n        {({TransitionProps}) => (\r\n          <Fade {...TransitionProps} timeout={350}>\r\n            <Paper>\r\n              <Typography sx={{p: 2}}>The content of the Popper.</Typography>\r\n            </Paper>\r\n          </Fade>\r\n        )}\r\n      </Popper>\r\n    </div>\r\n  );\r\n}\r\n",noScrollbar:!0})})]})]})}}}]);
//# sourceMappingURL=157.3227a751.chunk.js.map