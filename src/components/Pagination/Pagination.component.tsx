import './Pagination.css'

const Pagination: React.FunctionComponent<{ currentPage: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>> }> = (props) => {
    const displayPages = () => {
        const pages = [1, 2, 3, 4]
        const currentPage = props.currentPage
        return pages.map(item => {
            return <div className='cIcon'>
                <hr className={`hRule ${item <= currentPage ? 'fill' : null} ${pages.indexOf(item) !== 0 ? null : 'inv'}`} />
                <span onClick={() => props.setCurrentPage(item)} className={`circle ${item <= currentPage ? 'fill' : null}`}><span>{item}</span></span>
                <hr className={`hRule ${item <= currentPage ? 'fill' : null} ${pages.indexOf(item) < pages.length - 1 ? null : 'inv'}`} />
            </div>
        })
    }
    return <div className='pageStyles'>{displayPages()}</div>
}

export default Pagination