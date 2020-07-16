const DataPost = () => {
  return (
    <div className="data-post">
      
      <div className="nav-post">
      <h2>./Title~Post</h2>
        <ul>
          <li>
            <a href="">
              <img className="avatar-post"src="../static/avatar.jpeg" alt="avatar-autor-post"/>
            </a>
            
          </li>
          <li>
            <a href="">
              <span>Autor</span>
              <span>//</span>
              <span> 28 de Mayo, 2020 </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="post-content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat iure sint accusantium tempore in quis alias, voluptas aspernatur est praesentium provident iste atque magni reiciendis harum qui, repudiandae id doloremque error consectetur reprehenderit eligendi. Voluptas autem rem ullam laudantium necessitatibus, ea a tenetur deleniti voluptates sit quidem repellat ipsa, facere corporis odit. Ut eaque beatae minima ullam velit modi error dicta perspiciatis mollitia numquam nisi, accusantium consequatur atque aliquam dolorum sapiente quidem tempora nostrum a consectetur cupiditate corrupti debitis deserunt. Voluptatem assumenda odit unde ratione! Ab debitis cupiditate perspiciatis eveniet, 
            </p>
            <p>
            officia inventore corrupti quas assumenda reiciendis rerum aliquam deleniti deserunt numquam blanditiis tenetur eaque voluptatibus? Deserunt asperiores quo non harum id! Perspiciatis sed repudiandae minus consectetur magnam, consequuntur obcaecati optio accusantium eos id! Qui sit rerum nostrum, ad delectus quis mollitia ab, quas amet placeat obcaecati exercitationem sunt in facere commodi non veniam quo eum sequi dolorum doloremque fugit itaque animi! Iste incidunt voluptatibus enim deserunt modi est eaque tenetur delectus vitae, qui perferendis illum architecto, minus esse. Mollitia, repudiandae! Commodi, doloribus consequatur. Tempore neque eum rerum libero nesciunt, possimus, consequuntur sequi minima laboriosam, amet sapiente. Et magni earum voluptatum error! Delectus debitis fugiat nam vero tenetur asperiores, quasi culpa.
          </p>
        
      </div>



{/* Styles */}



      <style jsx>{
        `
        .data-post{
            margin: 0 auto;
            
        }


          .nav-post{
            width:50%;
            heith:10%;
            margin-left:100px;
            
          }

          .avatar-post {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right:16px;
            margin-left:0;
          
          }
          
          .nav-post ul {
            display:flex;
            align-items:center;
            justify-content:start;
            
            
            
          }

          .nav-post li {
            list-style:none;
            display: inline-block;
          }


          .post-content{
            width: 80%;
            height: 100vh;
            margin-left: auto;
            margin-right: auto;
            padding: 30px;
            text-align: justify;
            font-size: 20px;
          }

        `
}
      </style>

      
    </div>
  );
};

export default DataPost;
