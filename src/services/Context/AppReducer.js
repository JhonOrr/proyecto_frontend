// export default function AppReducer(state, action){
//     switch(action.type){
//         case 'ADD_TASK':
//             return{
//                 tasks: [...state.tasks, action.payload]
//             };
//         case 'DELETE_TASK':
//             return{
//                 tasks : state.tasks.filter(task => task.id !== action.payload)
//             }
//         default:
//             break;
//     }
    
// }

export default function AppReducer(state, action) {
    switch (action.type) {
      case "ADD_EQUIPO":
        return {
          ...state,
          equipos: [...state.equipos, action.payload],
        };
      case "UPDATE_EQUIPO": {
        const updatedEquipo = action.payload;
  
        const updatedEquipos = state.equipos.map((equipo) => {
          if (equipo.id === updatedEquipo.id) {
            // updatedEquipo.done = equipo.done;
            return updatedEquipo;
          }
          return equipo;
        });
        return {
          ...state,
          equipos: updatedEquipos,
        };
      }
      case "DELETE_EQUIPO":
        return {
          ...state,
          equipos: state.equipos.filter((equipo) => equipo.id !== action.payload),
      }
      case "ADD_COMPONENTE":
        return {
          ...state,
          componentes: [...state.componentes, action.payload],
        };
      case "UPDATE_COMPONENTE": {
        const updatedComponente = action.payload;
  
        const updatedComponentes = state.componentes.map((componente) => {
          if (componente.id === updatedComponente.id) {
            // updatedEquipo.done = equipo.done;
            return updatedComponente;
          }
          return componente;
        });
        return {
          ...state,
          componentes: updatedComponentes,
        };
      }
      case "DELETE_COMPONENTE":
        return {
          ...state,
          componentes: state.componentes.filter((componente) => componente.id !== action.payload),
    }
    default:
      return state;
}
}