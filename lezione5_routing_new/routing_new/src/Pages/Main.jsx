import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

export default function Main() {


  const data = useLoaderData();


/*
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(r => r.json())
      .then(r => setData(r))
  }, [])
*/

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Main</h1>
          </div>
        </div>
        <div className="row">
          {
            data && data.map((el) => (
            <div key={el.id} className="col-12 col-md-4 mb-3">
              <Card post={el}/>
            </div>))
          }
        </div>
      </div>
    </>
  )

}

export async function loadPosts() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json(),);

  return data;
}