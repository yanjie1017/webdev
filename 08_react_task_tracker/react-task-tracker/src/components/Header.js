import PropTypes from 'prop-types'
import Button from './Button'

export const Header = ({title, showAddTask, onAdd}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
          color={showAddTask ? 'red' : 'green'}
          text={showAddTask ? 'Close' : 'Add'} 
          onClick={onAdd}
        />
    </header>

  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header