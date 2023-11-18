import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function IconListItem(props) {

    const {icon, url} = props;

  return (
    <Link href={url} target='_blank'>
        <FontAwesomeIcon icon={icon} height={'25px'} width={'25px'} />
       
    </Link>
  )
}

export default IconListItem