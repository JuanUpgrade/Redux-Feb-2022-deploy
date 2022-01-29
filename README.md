# Resumen de Redux

Redux es un contenedor de estado global para nuestra aplicación de React.

¿Qué quiere decir esto?

Si bien, dentro de un componente podemos usar useState para hacer nuestra web dinámica y que se actualice con cualquier cambio en variables de estado,
redux es una especie de useState gigante para toda la aplicación. La ventaja es que no depende de ningún componente para crear el estado.

¿Entonces como se actualiza?

Tenemos varios jugadores y elementos disponibles

Actions y Reducers -> Estos elementos van de la mano. Cuando ejecutamos una acción, se dispara un reducer.

¿Cómo nombro a mis Actions y Reducers?
Es sencillo, suele ser similar a los modelos de MongoDB en Node. Es decir, si en nuestro servidor tenemos modelos de Users, Posts, Post, y Comments, tendremos que crear un archivo de Actions y Reducers para cada uno de estos modelos.

Actions -> Mediante funciones, crearemos acciones. Estas acciones se 'dispararán' cuando se produzca algún cambio en nuestra aplicación.
Las dispararemos nosotros mismos a través de funciones que hemos tenido que crear. Por ejemplo: Pedir usuarios al servidor, pedir Posts al servidor ó informar si el servidor nos devuelve un error. A través de las Redux Dev Tools del navegador podremos ver de manera cronológica todo el historial de acciones que se van disparando.

Reducer -> Es el encargado de cambiar nuestro estado global (el useState global). En función de la acción que reciba, programaremos para que ocurra una cosa u u otra. Por ejemplo en caso de recibir bien los datos del servidor, o en caso de recibir un error, el reducer será el responsable de guardar la correspondiente información recibida del server.

Provider -> Como con el contexto de React (Context.Provider), necesitamos tener un único Provider en nuestro proyecto. Lo situaremos en primer nivel, en el archivo index.js que renderiza dentro a nuestro componente <App>.

Store -> Solo puede haber 1 en toda la aplicación. Se encarga de conectar los 'estados' divididos en partes (reducers) en un único punto.


## Bien, ¿Y ahora como lo conectamos todo?

Todo empieza en el archivo de Actions correspondiente. Ahí crearemos funciones que harán algo específico. Esas funciones las vamos a exportar y las vamos a ejecutar desde el componente deseado. Por ejemplo, PostsActions exporta una función getPosts(). Esa función pide los posts al servidor y cuando los recibe, comprobará en nuestro Reducer qué tiene que hacer con los datos recibidos. El reducer guardará la información correspondiente en nuestra Store de Redux.

De esa manera, 'dispararemos' acciones.

Hasta aquí todo OK, pero ¿Y para leer los datos del estado de Redux?

Ahora es donde entran en juego dos nuevas funciones de las que no hemos hablado hasta ahora. 'connect' que importaremos de Redux y 'mapStateToProps';

connect -> Esta función la usaremos para conectar nuestro componente al estado global de Redux.

mapStateToProps -> Es una función callback que le pasamos a la función 'connect' de redux. En esta función vamos a definir las variables que queremos obtener del store de Redux.