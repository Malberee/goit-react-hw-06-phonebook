import React from 'react'
import PropTypes from 'prop-types'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getFilter } from '../../redux/selectors'
import { deleteContact } from '../../redux/contactsSlice'
import { List, ListItem, TrashIcon } from './ContactList.styled'

const ContactList = ({ contacts }) => {
	const dispatch = useDispatch()

	const filter = useSelector(getFilter)

	const showContacts = () => {
		return contacts.filter(({ name }) =>
			name.toLowerCase().includes(filter.toLowerCase())
		)
	}

	return (
		<List>
			{showContacts().map(({ id, name, number }) => {
				return (
					<ListItem key={id}>
						<p>{name}</p>
						<p>{number}</p>
						<TrashIcon onClick={() => dispatch(deleteContact(id))}>
							<FaRegTrashAlt size={18} />
						</TrashIcon>
					</ListItem>
				)
			})}
		</List>
	)
}

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
}

export default ContactList
