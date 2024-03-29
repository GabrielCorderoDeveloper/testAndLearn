import React from 'react'

function WithStorageListener (WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log('Hubo cambios');
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        props.synchronize();
        setStorageChange(false);
    }

    return <WrappedComponent 
        show={storageChange}
        toggleShow={toggleShow}
    />;
  }
}

export { WithStorageListener };
