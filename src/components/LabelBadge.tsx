import React from 'react'
import { Badge } from './ui/badge';

const LabelBadge = ({ name }: { name: string }) => {

    const badgeStyle = {
        "--label-color": `var(--out-${name.toLowerCase()})`,
    } as React.CSSProperties;

    return (
        <Badge variant={'secondary'} style={badgeStyle} className="bg-[var(--label-color)] hover:bg-[var(--label-color)] capitalize text-white">{name}</Badge>
    )

}


export default LabelBadge