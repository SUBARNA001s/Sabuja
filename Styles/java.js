document.getElementById('postCommentButton').addEventListener('click', function() {
    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() !== '') {
        const commentSection = document.getElementById('comments');
        
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        
        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = 'User';
        
        const text = document.createElement('div');
        text.classList.add('text');
        text.textContent = commentText;
        
        commentDiv.appendChild(author);
        commentDiv.appendChild(text);
        commentSection.appendChild(commentDiv);
        
        document.getElementById('commentText').value = '';
    }
});

document.getElementById('likeButton').addEventListener('click', function() {
    alert('You liked the video!');
});

document.getElementById('shareButton').addEventListener('click', function() {
    alert('Share this video using the link: [Video URL]');
});