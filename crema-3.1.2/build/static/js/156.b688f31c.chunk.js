(this.webpackJsonphister=this.webpackJsonphister||[]).push([[156],{2365:function(r,n,o){"use strict";o.r(n);var e=o(2),t=o(72),a=o(60),i=o(1458),p=o(38),c=o(14),s=o(1580),l=o(223),h=o(719),v=o(1);function u(){var r=e.useState(null),n=Object(c.a)(r,2),o=n[0],t=n[1],a=Boolean(o),i=a?"simple-popover":void 0;return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{"aria-describedby":i,variant:"contained",onClick:function(r){t(r.currentTarget)},children:"Open Popover"}),Object(v.jsx)(s.a,{id:i,open:a,anchorEl:o,onClose:function(){t(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:Object(v.jsx)(l.a,{sx:{p:2},children:"The content of the Popover."})})]})}function d(){var r=e.useState(null),n=Object(c.a)(r,2),o=n[0],t=n[1],a=function(){t(null)},i=Boolean(o);return Object(v.jsxs)("div",{children:[Object(v.jsx)(l.a,{"aria-owns":i?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(r){t(r.currentTarget)},onMouseLeave:a,children:"Hover with a Popover."}),Object(v.jsx)(s.a,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:i,anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:a,disableRestoreFocus:!0,children:Object(v.jsx)(l.a,{sx:{p:1},children:"I use Popover."})})]})}n.default=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(t.a,{title:"Popover",description:"A Popover can be used to display some content on top of another.",refUrl:"https://mui.com/components/popover/"}),Object(v.jsxs)(a.a,{children:[Object(v.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(p.a,{title:"BasicPopover",component:u,source:"import * as React from 'react';\r\nimport Popover from '@mui/material/Popover';\r\nimport Typography from '@mui/material/Typography';\r\nimport Button from '@mui/material/Button';\r\n\r\nexport default function BasicPopover() {\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n\r\n  const handleClick = (event) => {\r\n    setAnchorEl(event.currentTarget);\r\n  };\r\n\r\n  const handleClose = () => {\r\n    setAnchorEl(null);\r\n  };\r\n\r\n  const open = Boolean(anchorEl);\r\n  const id = open ? 'simple-popover' : undefined;\r\n\r\n  return (\r\n    <div>\r\n      <Button aria-describedby={id} variant='contained' onClick={handleClick}>\r\n        Open Popover\r\n      </Button>\r\n      <Popover\r\n        id={id}\r\n        open={open}\r\n        anchorEl={anchorEl}\r\n        onClose={handleClose}\r\n        anchorOrigin={{\r\n          vertical: 'bottom',\r\n          horizontal: 'left',\r\n        }}\r\n      >\r\n        <Typography sx={{p: 2}}>The content of the Popover.</Typography>\r\n      </Popover>\r\n    </div>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(v.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(p.a,{title:"Mouse Over Popover",component:d,source:"import * as React from 'react';\r\nimport Popover from '@mui/material/Popover';\r\nimport Typography from '@mui/material/Typography';\r\n\r\nexport default function MouseOverPopover() {\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n\r\n  const handlePopoverOpen = (event) => {\r\n    setAnchorEl(event.currentTarget);\r\n  };\r\n\r\n  const handlePopoverClose = () => {\r\n    setAnchorEl(null);\r\n  };\r\n\r\n  const open = Boolean(anchorEl);\r\n\r\n  return (\r\n    <div>\r\n      <Typography\r\n        aria-owns={open ? 'mouse-over-popover' : undefined}\r\n        aria-haspopup='true'\r\n        onMouseEnter={handlePopoverOpen}\r\n        onMouseLeave={handlePopoverClose}\r\n      >\r\n        Hover with a Popover.\r\n      </Typography>\r\n      <Popover\r\n        id='mouse-over-popover'\r\n        sx={{\r\n          pointerEvents: 'none',\r\n        }}\r\n        open={open}\r\n        anchorEl={anchorEl}\r\n        anchorOrigin={{\r\n          vertical: 'bottom',\r\n          horizontal: 'left',\r\n        }}\r\n        transformOrigin={{\r\n          vertical: 'top',\r\n          horizontal: 'left',\r\n        }}\r\n        onClose={handlePopoverClose}\r\n        disableRestoreFocus\r\n      >\r\n        <Typography sx={{p: 1}}>I use Popover.</Typography>\r\n      </Popover>\r\n    </div>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"This demo demonstrates how to use the Popover component and the mouseover event to achieve popover behavior."})})]})]})}}}]);
//# sourceMappingURL=156.b688f31c.chunk.js.map