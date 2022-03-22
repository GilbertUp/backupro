// function submitFunction() {
//   if (localStorage.getItem("id")) {
//     update();
//     return false;
//   }
//   // get user id
//   const user = firebase.auth().currentUser;
//   //get your image
//   var image = document.getElementById("image").files[0];
//   //get your blog text
//   var title = document.getElementById("title").value;
//   var body = document.getElementById("body").value;
//   //   get tag
//   var tag = document.getElementById("tag").value;
//   //get image name
//   var imageName = image.name;
//   //firebase storage reference
//   //it is the path where your image will be stored
//   var storageRef = firebase.storage().ref("images/" + imageName);
//   //upload image to selected storage reference
//   //make sure you pass image here
//   var uploadTask = storageRef.put(image);
//   //to get the state of image uploading....
//   uploadTask.on(
//     "state_changed",
//     function (snapshot) {
//       //get task progress by following code
//       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log("upload is " + progress + " done");
//     },
//     function (error) {
//       //handle error here
//       console.log(error.message);
//     },
//     function () {
//       //handle successfull upload here..
//       uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
//         //get your image download url here and upload it to databse
//         //our path where data is stored ...push is used so that every post have unique id
//         firebase
//           .database()
//           .ref("blogs/")
//           .push()
//           .set(
//             {
//               title: title,
//               body: body,
//               imageURL: downloadURL,
//               tag: tag,
//             },
//             function (error) {
//               if (error) {
//                 alert("Error while uploading");
//               } else {
//                 alert("Successfully uploaded");
//                 //now reset your form
//                 document.getElementById("new-article-form").reset();
//                 // getdata();
//               }
//             }
//           );
//       });
//     }
//   );
//   return false;
// }

// // window.onload = function () {
// //   this.getdata();
// // };

// function getdata() {
//   firebase
//     .database()
//     .ref("blogs/")
//     .once("value")
//     .then(function (snapshot) {
//       //get your posts div
//       var posts_div = document.getElementById("posts");
//       //remove all remaining data in that div
//       posts.innerHTML = "";
//       //get data from firebase
//       var data = snapshot.val();
//       var dataToDisplay = "";
//       // console.log(data);
//       //now pass this data to our posts div
//       //we have to pass our data to for loop to get one by one
//       //we are passing the key of that post to delete it from database
//       for (let [key, value] of Object.entries(data)) {
//         dataToDisplay += `
//            <tr>
//                             <td>
//                                 <img src="${value.imageURL}">
//                             </td>
//                             <td>
//                                ${value.title}
//                             </td>
//                             <td>
//                                 ${value.body}
//                             </td>
//                             <td>
//                                 ${value.tag}
//                             </td>
//                             <td>
//                                 <div class="flex">
//                                     <a href="new-article.html" onclick="storeData('${key}','${value.title}','${value.body}','${value.tag}','${value.imageURL}');">
//                                     <button>Edit</button>
//                                 </a>
//                                 <a href="#">
//                                     <button id='${key}' onclick='delete_post(
//           this.id
//         )' class="delete-button">Delete</button>
       
//                                 </a>
//                                 <a href=""><button id="getcom">comments</button></a>
//                                 <a href=""><button id="getlike">Likes</button></a>
//                                 </div>
//                             </td>
//                         </tr>
//                         `;
//       }
//       posts_div.innerHTML = dataToDisplay;
//     });
// }

// function getdataOnIndex() {
//   firebase
//     .database()
//     .ref("blogs/")
//     .once("value")
//     .then(function (snapshot) {
//       //get your posts div
//       var posts_div = document.getElementById("posts");
//       //remove all remaining data in that div
//       posts.innerHTML = "";
//       //get data from firebase
//       var data = snapshot.val();
//       var dataToDisplay = "";
//       // console.log(data);
//       //now pass this data to our posts div
//       //we have to pass our data to for loop to get one by one
//       //we are passing the key of that post to delete it from database
//       for (let [key, value] of Object.entries(data)) {
//         dataToDisplay += `
//            <div class="skill-card">
//                 <center>
//                     <img src="${value.imageURL}"/>
//                     <h1>${value.title}</h1>
//                     <p>${value.body}</p>
                    
//                     <button class="like" id="like">Like</button>
//                     <a href="comment-form.html">  <button class="comment"id="comment">comment</button>
//                 </center>
//             </div>
//                         `;
//       }
//       posts_div.innerHTML = dataToDisplay;
//     });
// }
// function storeData(id, title, body, tag, image) {
//   // console.log("done");
//   localStorage.setItem("id", id);
//   localStorage.setItem("title", title);
//   localStorage.setItem("body", body);
//   localStorage.setItem("tag", tag);
//   localStorage.setItem("image", image);
// }

// function delete_post(key) {
//   firebase
//     .database()
//     .ref("blogs/" + key)
//     .remove();
//   getdata();
//   // console.log(key);
// }

// function getDataForUpdate(key) {
//   firebase
//     .database()
//     .ref("blogs/")
//     .once("value")
//     .then(function (snapshot) {
//       //get your posts div
//       // var posts_div = document.getElementById("posts");
//       //remove all remaining data in that div
//       // posts.innerHTML = "";
//       //get data from firebase
//       var data = snapshot.val();
//       // var dataToDisplay = "";
//       // console.log(data);
//       //now pass this data to our posts div
//       //we have to pass our data to for loop to get one by one
//       //we are passing the key of that post to delete it from database

//       // posts_div.innerHTML = dataToDisplay;
//       console.log(data);
//     });
// }
// function update() {
//   let key = localStorage.getItem("id");
//   let title = document.getElementById("title").value;
//   let body = document.getElementById("body").value;
//   let tag = document.getElementById("tag").value;
//   let imageURL = localStorage.getItem("image");
//   firebase
//     .database()
//     .ref("blogs/" + key)
//     .set(
//       {
//         title: title,
//         body: body,
//         tag: tag,
//         imageURL: imageURL,
//       },
//       (error) => {
//         if (error) {
//           // The write failed...
//           console.log(error);
//         } else {
//           // Data saved successfully!
//           alert("Data Update well done");
//           window.open("./blog.html", "_self");
//         }
//       }
//     );
//   localStorage.clear();
// }

function isLoginedIn()
{
    let token = localStorage.getItem("token");
    if(token==null)
    {
        location.href = '../login.html'
    }
}
isLoginedIn()

 function logout()
{
  localStorage.clear();
  window.location.reload();
}

document.getElementById("logoutBtn").addEventListener("click",ev=>logout())


  