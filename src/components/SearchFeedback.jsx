export default function SearchFeedback({ type, message }) {
    return(
        <div className={`search-feedback search-feedback-${type}`}>
            {message}
        </div>
    );
}