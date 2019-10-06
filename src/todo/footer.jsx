import '../assets/style/footer.styl'

export default {
    data() {
        return {
            author: 'to use'
        }
    },
    render() {
        return(
            <div id="footer">
                <span>Welcome {this.author}</span>
            </div>
        )
    }
}
