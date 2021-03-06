// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/comments/new" page={NewCommentPage} name="newComment" />
      <Route path="/comments/{id:Int}/edit" page={EditCommentPage} name="editComment" />
      <Route path="/comments/{id:Int}" page={CommentPage} name="comment" />
      <Route path="/comments" page={CommentsPage} name="comments" />
      <Route path="/beans/new" page={NewBeanPage} name="newBean" />
      <Route path="/beans/{id:Int}/edit" page={EditBeanPage} name="editBean" />
      <Route path="/beans/{id:Int}" page={BeanPage} name="bean" />
      <Route path="/beans" page={BeansPage} name="beans" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
