import { schema,normalize } from "normalizr";

const blog = {
    id:"1",
    title:"Titulo de la Publicacion",
    description:"Descripcion completa de la publicacion",
    content:"Hola este es mi aporte!",
    author:{
        id:"1",
        name:"Jhon"
    },
    comments:[
        {
            id:"1",
            author:"Alejandro",
            content:"Buen Post!"
        },
        {
            id:"2",
            author:"Jeremy",
            content:"Excelente noticia!"
        }
    ]
}

/* Proceso de Normalizacion */

const comment = new schema.Entity('comment')
const author = new schema.Entity('authors')
const blogSchema = new schema.Entity('blog',{
    author:author,
    comments:[comment]
})

const normalizedData = normalize(blog,blogSchema)

console.log(JSON.stringify(normalizedData,null,'/t'))

/* Desnormalizacion */

const normalData = denormalize(normalizedData.result,blogSchema,normalizedData.entities)
console.log(normalData);
