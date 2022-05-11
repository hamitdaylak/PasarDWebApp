// material
import { useTheme } from '@mui/material/styles';
import { Stack, Box, Typography, Tooltip } from '@mui/material';

import { customShadows } from '../theme/shadows';
import {getDiaBalanceDegree} from '../utils/common'
// ----------------------------------------------------------------------

const ColorSet = [
  {background: 'linear-gradient(0deg, #363636 3%, #a6a6a6 100%)', afterBackground: '#9d9d9d', afterShadowColor: '#3a3a3a', name: '', min: 0},
  {background: 'linear-gradient(0deg, #B37E59 3%, #FFD2B3 100%)', afterBackground: '#F2C7AA', afterShadowColor: '#b5815c', name: 'Bronze', min: 0.01},
  {background: 'linear-gradient(0deg, #B6B6BF 3%, #EDF4FA 100%)', afterBackground: '#DADCE6', afterShadowColor: '#b6b6bf', name: 'Silver', min: 0.1},
  {background: 'linear-gradient(0deg, #FFBB33 3%, #FFEDA6 100%)', afterBackground: '#FFDF80', afterShadowColor: '#f2ba49', name: 'Gold', min: 1}
]
export default function DIABadge(props) {
  const { balance=0, sx, isRequire=false } = props
  let { degree=0 } = props
  const src = '/static/badges/diamond.svg'
  if(!degree)
    degree = getDiaBalanceDegree(balance)
  const {background, afterBackground, afterShadowColor, name, min} = ColorSet[degree]
  const tooltipText = isRequire?`Hold a minimum of ${min} DIA (Diamond)`:`${name} Diamond (DIA) token holder`
  return (
    <Tooltip title={tooltipText} arrow enterTouchDelay={0}>
      <Box sx={{display: 'inline-flex'}}>
        <Stack
          direction='row'
          sx={{
            width: 26,
            height: 26,
            borderRadius: '100%',
            p: '3px',
            boxShadow: (theme)=>theme.palette.mode==='light'?customShadows.dark.origin:customShadows.light.origin,
            background,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            '&:after': {
              content: "''",
              background: afterBackground,
              boxShadow: `inset 0 1px 1px 0 ${afterShadowColor}`,
              left: 3,
              right: 3,
              top: 3,
              bottom: 3,
              borderRadius: '50%',
              position: 'absolute'
            },
            ...sx
          }}
        >
          <Box 
            draggable = {false}
            component="img"
            alt=""
            src={src}
            sx={{ width: 18, height: 18, zIndex: 1, pt: '3px' }}
          />
        </Stack>
      </Box>
    </Tooltip>
  );
}
