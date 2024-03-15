import { List, ListItemText } from '@mui/material'

import { IOption } from '../../../../interfaces/Survey'

const ListOptionsSurvey = ({ options }: { options: IOption[] }) => {
    return (
        <List sx={{ listStyleType: 'disc', pl: 2 }}>
            {options.map((o) => {
                return <ListItemText sx={{ display: 'list-item' }} primary={o.name} key={o.id} />
            }).slice(0, 2)}
        </List>
    )
}

export default ListOptionsSurvey