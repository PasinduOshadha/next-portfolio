import Link from 'next/link'
import { DynamicIcon } from 'lucide-react/dynamic'


function IconListItem(props) {
    const {icon, url} = props;

  return (
    <Link href={url} target='_blank' rel='noopener noreferrer'>
        <DynamicIcon name={icon} />
    </Link>
  )
}

export default IconListItem