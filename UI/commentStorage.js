
// function loadComments(blog_id) {
//     let all_comments = localStorage["comments"]
//       ? [...JSON.parse(localStorage["comments"])].reverse()
//       : [];
//     let filtered_comments = all_comments.filter(
//       (item) => item.blog_id === blog_id
//     );
//     commentsContainer.innerHTML = `
//       <label class="comments-count">${filtered_comments.length} Comment(s)</label>
//     `;
//     commentsCounter.innerHTML = `${filtered_comments.length} COMMENT(S)`;
//     for (const comment of filtered_comments) {
//       commentsContainer.innerHTML += `
//         <div class="comment">
//           <div class="commenter">
//             <label class="commenter-name">${comment.name}</label>
//             <div class="separator"></div>
//             <label class="commenter-time">${moment(
//               comment.date,
//               "DD/MM/YYYY, hh:mm:ss"
//             ).fromNow()}</label>
//           </div>
//           <div class="comment-body">
//             <p>${comment.body}</p>
//           </div>
//           <div>
//             <a href="#" class="comment-likes" onclick="likeComment('${
//               comment.id
//             }')">${countLikes("comment", comment.id)} Likes</a>
//             <label> | </label>
//             <a href="#" class="comment-likes">Reply</a>
//           </div>
//           <div class="replies">
//               <form
//               name="replyForm"
//               onsubmit="return(validateReplyForm(event,'${comment.id}','${
//         comment.name
//       }'))"
//               >
//               <textarea
//                 name="reply"
//                 placeholder="Your reply..."
//               ></textarea>
//               <label class="error-bag" id="reply"
//                 >ERROR: Invalid reply</label
//               >
//               <button type="submit">Reply</button>
//               </form>
//               <div class="the-replies">
//                 ${getReplies(comment.id)}
//               </div>
//           </div>
//           <div class="line-separator"></div>
//         </div>
//         `;
//     }
//   }



