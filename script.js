<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">

  <title>Project: Library</title>
</head>
<body>
  <div class="master-wrap">
    <table>
          <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Pages</th>
              <th>Date Finished</th>
              <th>Read?</th>
          </tr>
          <tbody></tbody>
    </table>
  

  <div class="submit-button-wrap">
    <button class="new-book" type="button" onclick="showNewBookForm()">New Book</button>
  </div>

  <div class="form-wrap">
      <form method="post">
          <label for="author">Author</label>
          <input type="text" id="Author">
          <label for="title">Title</label>
          <input type="text" id="title">
          <label for="pages">Pages</label>
          <input type="text" id="pages">
          <label for="date">Date Finished</label>
          <input type="text" id="date">
          <label for="read">Read?</label>
          <input type="text" id="read">
          <button class="submit" type="submit">Submit</button>
      </form>
  </div>
</div>
  <script src="script.js"></script>
</body>
</html>
