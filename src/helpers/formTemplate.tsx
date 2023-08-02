import { Card } from "../components/common/Card"
import { Input } from "../components/common/Input"
import user from '../user.png'
import users from '../users.png'
import tick from '../tick.png'

const formTemplate = [
    {
        page: 1,
        title: 'Welcome! First things first...',
        subTitle: 'You can always change them later.',
        fields: [
            {
                children: {
                    id: 'fName',
                    type: 'text',
                    label: 'Full Name',
                    placeholder: 'Steve Jobs'
                },
                component: Input
            },
            {
                children: {
                    id: 'dName',
                    type: 'text',
                    label: 'Display Name',
                    placeholder: 'Steve'
                },
                component: Input
            }
        ],
        submitText: 'Create Workspace'
        
    },
    {
        page: 2,
        title: `Let's setup a home for all your work`,
        subTitle: 'You can alway create another workspace later.',
        fields: [
            {
                children: {
                    id: 'wName',
                    type: 'text',
                    label: 'Workspace Name',
                    placeholder: 'Eden'
                },
                component: Input
            },
            {
                children: {
                    id: 'wURL',
                    hint: 'www.eden.com/',
                    type: 'text',
                    label: 'Workspace URL',
                    placeholder: 'Example'
                },
                component: Input
            }
        ],
        submitText: 'Create Workspace'
        
    },
    {
        page: 3,
        title: 'How are you planning to use Eden?',
        subTitle: `We'll streamline your setup experience accordingly.`,
        fields: [
            {
                children: {
                    id: 'accountType',
                    accountType: 'myself',
                    icon: user,
                    title: 'For Myself',
                    description: 'Write Better. Think More Clearly. Stay Organized.'
                },
                component: Card
            },
            {
                children: {
                    id: 'accountType',
                    accountType: 'group',
                    icon: users,
                    title: 'With My team',
                    description: 'Wikis, docs, tasks & projects, all in one place.'
                },
                component: Card
            }
        ],
        submitText: 'Create Workspace'
    },
    {
        page: 4,
        completeIcon: tick,
        title: 'Congratulations, -name-!',
        subTitle: 'You have completed onboarding, you can start using Eden!',
        fields: [
        ],
        submitText: 'Launch Eden'
    }
]

export { formTemplate }