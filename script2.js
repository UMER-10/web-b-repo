const blogContainer = document.querySelector('.blog-container');
const saveBlogButton = document.getElementById('save-blog');
const blogTitleInput = document.getElementById('blog-title');
const blogContentInput = document.getElementById('blog-content');

let blogs = [];

function renderBlogs() {
    blogContainer.innerHTML = '';

    blogs.forEach((blog, index) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';

        const titleElement = document.createElement('h3');
        titleElement.textContent = blog.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = blog.content;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editBlog(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteBlog(index));

        blogCard.appendChild(titleElement);
        blogCard.appendChild(contentElement);
        blogCard.appendChild(editBtn);
        blogCard.appendChild(deleteBtn);

        blogContainer.appendChild(blogCard);
    });
}

function addBlog(title, content) {
    blogs.push({ title, content });
    renderBlogs();
}

function deleteBlog(index) {
    blogs.splice(index, 1);
    renderBlogs();
}

function editBlog(index) {
    const blog = blogs[index];
    blogTitleInput.value = blog.title;
    blogContentInput.value = blog.content;

    saveBlogButton.textContent = 'Update';

    saveBlogButton.onclick = () => {
        blogs[index].title = blogTitleInput.value;
        blogs[index].content = blogContentInput.value;
        saveBlogButton.textContent = 'Save';
        renderBlogs();
        clearInputs();
    };
}

saveBlogButton.addEventListener('click', () => {
    const title = blogTitleInput.value;
    const content = blogContentInput.value;

    if (saveBlogButton.textContent === 'Save') {
        addBlog(title, content);
    } else {
        saveBlogButton.textContent = 'Save';
    }

    clearInputs();
});

function clearInputs() {
    blogTitleInput.value = '';
    blogContentInput.value = '';
}

// Initial blogs
addBlog("My First Blog", "This is my very first blog post.");
addBlog("Another Blog", "Here's another interesting blog entry.");
