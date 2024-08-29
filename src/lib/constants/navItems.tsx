import { PlayCircle, Save } from "lucide-react"
import { FiGithub } from "react-icons/fi"

const navItems = [
    // {
    //     name: 'Demo',
    //     icon: <PlayCircle className="mr-2 h-4 w-4" />,
    //     link: '/'
    // },
    // {
    //     name: 'Batch',
    //     icon: <LayoutGrid className="mr-2 h-4 w-4" />,
    //     link: '/batch'
    // },
    {
        name: 'Classifier',
        icon: <PlayCircle className="mr-2 h-4 w-4" />,
        link: '/'
    },
    {
        name: 'Saved Results',
        icon: <Save className="mr-2 h-4 w-4" />,
        link: '/#saved-results'
    },

    {
        name: 'Source Code',
        icon: <FiGithub className="mr-2 h-4 w-4" />,
        link: 'https://github.com/syke9p3/mlthsc-thesis'
    },
]

export default navItems;