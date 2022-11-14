import styled from "styled-components";
import HelpIcon from '@mui/icons-material/Help';

const Icon = styled(HelpIcon)`
  color: #D4D4D4;
  font-size: 1rem !important;
`
const TooltipIcon = ({text}) => {
  return <Icon />
}

export default TooltipIcon;