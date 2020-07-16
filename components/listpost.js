import Link from "next/link";



const ListPost = () => {
    return (  
            <div>
                <ul className="post-link" >
                    <li> 
                        <span>2020-06-16</span>
                        <Link href="/post">
                        <a href=""> Vanilla~Post </a>
                        </Link>
                        </li>
                    <li>
                        <span>2020-06-16</span>
                        <a href=""> Vanilla~Post </a>
                        </li>
                    <li>
                        <span>2020-06-16</span>
                        <a href=""> Vanilla~Post </a>
                        </li>
                </ul>




            {/* StyleD JSX */}

            <style jsx>
                         {
                             ` 

                                .post-link{
                                    padding: 0px 50px;
                                    widt: 100%;
                                    margin-top:50px;
                                    margin-right: 100px;
                                    margin-left:100px;
                                    font-size:25px;
                                    display:flex;
                              
                                    flex-direction:column;
                                    align-items:center;
                                    justify-content:center;
                                    
                                }

                                span{
                                    margin-right:80px;
                                    color: #5b5b5b;
                                }
                                 
                                


                                li{
                                    display:inlene-block;
                                    list-style:none;
                                    margin-right:100px;
                                    
                                }
                             
                             
                             
                             `
                         }

            </style>




            </div>

    );
}
 
export default ListPost;
      