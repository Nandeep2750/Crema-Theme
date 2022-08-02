(this.webpackJsonphister=this.webpackJsonphister||[]).push([[141],{2330:function(e,n,r){"use strict";r.r(n);var t=r(2),a=r(72),i=r(60),o=r(1458),l=r(38),c=r(14),s=r(206),m=r(1856),u=r(223),d=r(1);function p(){var e=t.useState(2),n=Object(c.a)(e,2),r=n[0],a=n[1];return Object(d.jsxs)(s.a,{sx:{"& > legend":{mt:2}},children:[Object(d.jsx)(u.a,{component:"legend",children:"Controlled"}),Object(d.jsx)(m.a,{name:"simple-controlled",value:r,onChange:function(e,n){a(n)}}),Object(d.jsx)(u.a,{component:"legend",children:"Read only"}),Object(d.jsx)(m.a,{name:"read-only",value:r,readOnly:!0}),Object(d.jsx)(u.a,{component:"legend",children:"Disabled"}),Object(d.jsx)(m.a,{name:"disabled",value:r,disabled:!0}),Object(d.jsx)(u.a,{component:"legend",children:"No rating given"}),Object(d.jsx)(m.a,{name:"no-value",value:null})]})}var g=r(1615);function f(){return Object(d.jsxs)(g.a,{spacing:1,children:[Object(d.jsx)(m.a,{name:"half-rating",defaultValue:2.5,precision:.5}),Object(d.jsx)(m.a,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]})}var h=r(1640),j=r.n(h),x={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function b(){var e=t.useState(2),n=Object(c.a)(e,2),r=n[0],a=n[1],i=t.useState(-1),o=Object(c.a)(i,2),l=o[0],u=o[1];return Object(d.jsxs)(s.a,{sx:{width:200,display:"flex",alignItems:"center"},children:[Object(d.jsx)(m.a,{name:"hover-feedback",value:r,precision:.5,onChange:function(e,n){a(n)},onChangeActive:function(e,n){u(n)},emptyIcon:Object(d.jsx)(j.a,{style:{opacity:.55},fontSize:"inherit"})}),null!==r&&Object(d.jsx)(s.a,{sx:{ml:2},children:x[-1!==l?l:r]})]})}function y(){return Object(d.jsxs)(g.a,{spacing:1,children:[Object(d.jsx)(m.a,{name:"size-small",defaultValue:2,size:"small"}),Object(d.jsx)(m.a,{name:"size-medium",defaultValue:2}),Object(d.jsx)(m.a,{name:"size-large",defaultValue:2,size:"large"})]})}var v=r(17),O=r(1633),S=r.n(O),R=r(1676),V=r.n(R),I=Object(v.a)(m.a)({"& .MuiRating-iconFilled":{color:"#ff6d75"},"& .MuiRating-iconHover":{color:"#ff3d47"}});function z(){return Object(d.jsxs)(s.a,{sx:{"& > legend":{mt:2}},children:[Object(d.jsx)(u.a,{component:"legend",children:"Custom icon and color"}),Object(d.jsx)(I,{name:"customized-color",defaultValue:2,getLabelText:function(e){return"".concat(e," Heart").concat(1!==e?"s":"")},precision:.5,icon:Object(d.jsx)(S.a,{fontSize:"inherit"}),emptyIcon:Object(d.jsx)(V.a,{fontSize:"inherit"})}),Object(d.jsx)(u.a,{component:"legend",children:"10 stars"}),Object(d.jsx)(m.a,{name:"customized-10",defaultValue:2,max:10})]})}var T=r(5),C=r(23),B=r(2013),k=r.n(B),w=r(2014),D=r.n(w),H=r(2015),F=r.n(H),A=r(2016),P=r.n(A),U=r(2017),G=r.n(U),E=["value"],M={1:{icon:Object(d.jsx)(k.a,{}),label:"Very Dissatisfied"},2:{icon:Object(d.jsx)(D.a,{}),label:"Dissatisfied"},3:{icon:Object(d.jsx)(F.a,{}),label:"Neutral"},4:{icon:Object(d.jsx)(P.a,{}),label:"Satisfied"},5:{icon:Object(d.jsx)(G.a,{}),label:"Very Satisfied"}};function N(e){var n=e.value,r=Object(C.a)(e,E);return Object(d.jsx)("span",Object(T.a)(Object(T.a)({},r),{},{children:M[n].icon}))}function J(){return Object(d.jsx)(m.a,{name:"highlight-selected-only",defaultValue:2,IconContainerComponent:N,highlightSelectedOnly:!0})}n.default=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.a,{title:"Rating",description:"Ratings provide insight regarding others opinions and experiences, and can allow the user to submit a rating of their own.",refUrl:"https://mui.com/components/rating/"}),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(l.a,{title:"Basic rating",component:p,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Rating from '@mui/material/Rating';\r\nimport Typography from '@mui/material/Typography';\r\n\r\nexport default function BasicRating() {\r\n  const [value, setValue] = React.useState(2);\r\n\r\n  return (\r\n    <Box\r\n      sx={{\r\n        '& > legend': {mt: 2},\r\n      }}\r\n    >\r\n      <Typography component='legend'>Controlled</Typography>\r\n      <Rating\r\n        name='simple-controlled'\r\n        value={value}\r\n        onChange={(event, newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n      />\r\n      <Typography component='legend'>Read only</Typography>\r\n      <Rating name='read-only' value={value} readOnly />\r\n      <Typography component='legend'>Disabled</Typography>\r\n      <Rating name='disabled' value={value} disabled />\r\n      <Typography component='legend'>No rating given</Typography>\r\n      <Rating name='no-value' value={null} />\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(d.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(l.a,{title:"Customization",component:z,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Box from '@mui/material/Box';\r\nimport Rating from '@mui/material/Rating';\r\nimport FavoriteIcon from '@mui/icons-material/Favorite';\r\nimport FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';\r\nimport Typography from '@mui/material/Typography';\r\n\r\nconst StyledRating = styled(Rating)({\r\n  '& .MuiRating-iconFilled': {\r\n    color: '#ff6d75',\r\n  },\r\n  '& .MuiRating-iconHover': {\r\n    color: '#ff3d47',\r\n  },\r\n});\r\n\r\nexport default function CustomizedRating() {\r\n  return (\r\n    <Box\r\n      sx={{\r\n        '& > legend': {mt: 2},\r\n      }}\r\n    >\r\n      <Typography component='legend'>Custom icon and color</Typography>\r\n      <StyledRating\r\n        name='customized-color'\r\n        defaultValue={2}\r\n        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}\r\n        precision={0.5}\r\n        icon={<FavoriteIcon fontSize='inherit' />}\r\n        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}\r\n      />\r\n      <Typography component='legend'>10 stars</Typography>\r\n      <Rating name='customized-10' defaultValue={2} max={10} />\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Here are some examples of customizing the component. You can learn more about this in the overrides documentation page."})}),Object(d.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(l.a,{title:"Rating precision",component:f,source:"import * as React from 'react';\r\nimport Rating from '@mui/material/Rating';\r\nimport Stack from '@mui/material/Stack';\r\n\r\nexport default function HalfRating() {\r\n  return (\r\n    <Stack spacing={1}>\r\n      <Rating name='half-rating' defaultValue={2.5} precision={0.5} />\r\n      <Rating\r\n        name='half-rating-read'\r\n        defaultValue={2.5}\r\n        precision={0.5}\r\n        readOnly\r\n      />\r\n    </Stack>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The rating can display any float number with the value prop. Use the precision prop to define the minimum increment value change allowed."})}),Object(d.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(l.a,{title:"Sizes",component:y,source:"import * as React from 'react';\r\nimport Rating from '@mui/material/Rating';\r\nimport Stack from '@mui/material/Stack';\r\n\r\nexport default function RatingSIze() {\r\n  return (\r\n    <Stack spacing={1}>\r\n      <Rating name='size-small' defaultValue={2} size='small' />\r\n      <Rating name='size-medium' defaultValue={2} />\r\n      <Rating name='size-large' defaultValue={2} size='large' />\r\n    </Stack>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"For larger or smaller ratings use the size prop."})}),Object(d.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(l.a,{title:"Hover feedback",component:b,source:"import * as React from 'react';\r\nimport Rating from '@mui/material/Rating';\r\nimport Box from '@mui/material/Box';\r\nimport StarIcon from '@mui/icons-material/Star';\r\n\r\nconst labels = {\r\n  0.5: 'Useless',\r\n  1: 'Useless+',\r\n  1.5: 'Poor',\r\n  2: 'Poor+',\r\n  2.5: 'Ok',\r\n  3: 'Ok+',\r\n  3.5: 'Good',\r\n  4: 'Good+',\r\n  4.5: 'Excellent',\r\n  5: 'Excellent+',\r\n};\r\n\r\nexport default function HoverRating() {\r\n  const [value, setValue] = React.useState(2);\r\n  const [hover, setHover] = React.useState(-1);\r\n\r\n  return (\r\n    <Box\r\n      sx={{\r\n        width: 200,\r\n        display: 'flex',\r\n        alignItems: 'center',\r\n      }}\r\n    >\r\n      <Rating\r\n        name='hover-feedback'\r\n        value={value}\r\n        precision={0.5}\r\n        onChange={(event, newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n        onChangeActive={(event, newHover) => {\r\n          setHover(newHover);\r\n        }}\r\n        emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize='inherit' />}\r\n      />\r\n      {value !== null && (\r\n        <Box sx={{ml: 2}}>{labels[hover !== -1 ? hover : value]}</Box>\r\n      )}\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"You can display a label on hover to help the user pick the correct rating value. The demo uses the onChangeActive prop."})}),Object(d.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(l.a,{title:"Radio group",component:J,source:"import * as React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport Rating from '@mui/material/Rating';\r\nimport SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';\r\nimport SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';\r\nimport SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';\r\nimport SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';\r\nimport SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';\r\n\r\nconst customIcons = {\r\n  1: {\r\n    icon: <SentimentVeryDissatisfiedIcon />,\r\n    label: 'Very Dissatisfied',\r\n  },\r\n  2: {\r\n    icon: <SentimentDissatisfiedIcon />,\r\n    label: 'Dissatisfied',\r\n  },\r\n  3: {\r\n    icon: <SentimentSatisfiedIcon />,\r\n    label: 'Neutral',\r\n  },\r\n  4: {\r\n    icon: <SentimentSatisfiedAltIcon />,\r\n    label: 'Satisfied',\r\n  },\r\n  5: {\r\n    icon: <SentimentVerySatisfiedIcon />,\r\n    label: 'Very Satisfied',\r\n  },\r\n};\r\n\r\nfunction IconContainer(props) {\r\n  const {value, ...other} = props;\r\n  return <span {...other}>{customIcons[value].icon}</span>;\r\n}\r\n\r\nIconContainer.propTypes = {\r\n  value: PropTypes.number.isRequired,\r\n};\r\n\r\nexport default function RadioGroupRating() {\r\n  return (\r\n    <Rating\r\n      name='highlight-selected-only'\r\n      defaultValue={2}\r\n      IconContainerComponent={IconContainer}\r\n      highlightSelectedOnly\r\n    />\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The rating is implemented with a radio group, set highlightSelectedOnly to restore the natural behavior."})})]})]})}}}]);
//# sourceMappingURL=141.d0764e61.chunk.js.map