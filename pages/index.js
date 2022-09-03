import Image from 'next/image'
function Blog({ posts }) {
  return (
    <div>
      <div className="container mx-auto px-5 2xl:px-0">
        <h1 className="text-slate-800 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
          Recommended For You
        </h1>

</div>
      {posts.map((post) => (
        <div>{post.id}

        <div className="flex flex-wrap -m-1 md:-m-2 container px-5 py-2 mx-auto lg:pt-12 lg:px-32 overflow-hidden">
        <Image className=" block object-cover object-center w-full h-full rounded-lg" src= {post.urls.raw} /> 
        </div>
 
         
        
  </div>
        

        
       

        

        
      ))}
    </div>
    
    
    
    
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.unsplash.com/photos/?client_id=l1_K4N9jldlPzHKIof1lWOxsae2P3hzJvkmb_DDCGgo')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
