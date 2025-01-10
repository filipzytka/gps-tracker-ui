import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export const accordionData =
    [
        {
            value: 'item1',
            title: 'How accurate is the GPS tracking?',
            text: 'Our GPS tracking devices offer high-precision location data, ensuring accurate monitoring of your targets in real-time.'
        },
        {
            value: 'item2',
            title: 'Can I track multiple devices at once?',
            text: 'Yes! Our system supports tracking multiple devices simultaneously, so you can monitor several vehicles or individuals at once.'
        },
        {
            value: 'item3',
            title: 'How secure is the data?',
            text: 'We prioritize security with end-to-end encryption, ensuring that your tracking data remains private and protected.'
        }
    ]

export const features = [
    {
        name: 'Real-Time Updates',
        description:
            'Receive live location data, empowering you to act swiftly and stay informed at every moment.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Secure Data Access',
        description: 'State-of-the-art encryption ensures your tracking information remains confidential and protected.',
        icon: LockClosedIcon,
    },
    {
        name: 'Automated Location Logs',
        description: 'Keep a reliable history of movements with scheduled backups, so you never miss a detail.',
        icon: ServerIcon,
    },
]