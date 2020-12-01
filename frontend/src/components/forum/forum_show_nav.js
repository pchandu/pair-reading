
export default ({page, maxPage, handleClick}) => {
    // const { posts, user } = props;
    // debugger
    const pages = [];
    let prev = null;
    let next = null;
    if(page !== 1){
        prev = <li className="forum-show-prev-btn" onClick={handleClick('prev')}>
            prev
            </li>
    }
    if(page !== maxPage && maxPage >= 1){
        next = <li className="forum-show-nxt-btn" onClick={handleClick('next')}>
            next
            </li>
    }
    for (let i = 0; i < maxPage; i++) pages.push(
        <li key={i} className={page === i+1 ? "page-selected":""}>{i + 1}</li>
    );
    return <div className="forum-show-nav">
        <ul className = "forum-show-pages">
            {prev ? prev:<div className="empty"></div>}
            {pages}
            {next ? next : <div className="empty"></div>}
        </ul>
    </div>

}