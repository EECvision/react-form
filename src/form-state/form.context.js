import { useReducer, createContext } from 'react';
import { formReducer, INITIAL_STATE } from './form.reducer';

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {

  const [ state, dispatch] = useReducer(formReducer, INITIAL_STATE)
  
  const  {
    service,
    mode,
    from,
    to,
    readyDate,
    incoterms,
    totalCargo,
    totalVolume,
    totalWeight,
    warning,
    exportForwarding,
    importCustomClearance,
    cargoInsurance,
    transportDelivery,
    submit
  } = state;

  return (
    <FormContext.Provider value={{
      service,
      mode,
      from,
      to,
      readyDate,
      incoterms,
      totalCargo,
      totalVolume,
      totalWeight,
      warning,
      exportForwarding,
      importCustomClearance,
      cargoInsurance,
      transportDelivery,
      submit,
      dispatch
    }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider;