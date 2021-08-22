import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwalComponent = withReactContent(Swal);

const MySwal = Swal.mixin({
  background: "#ffffff",
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false
});

function AlertConfirmException( errorCode, exceptionMessage ) {
  console.log(errorCode ,exceptionMessage)
}

export async function showModal(configAlert) {
  try {
    return await MySwal.fire(configuration(configAlert));
  } catch (e) {
    throw new AlertConfirmException( e, "No se pudo renderizar la modal generico" );
  }
}

export const configuration = configAlert => {
  return {
    icon: configAlert.tipo ? configAlert.tipo : "info",
    title: configAlert.title,
    text: configAlert.text,
    position: configAlert.position === undefined ? "center" : configAlert.position,
    width: configAlert.width,
    timer: configAlert.timer,
    showCloseButton: configAlert.showCloseButton,
    showConfirmButton: configAlert.showConfirmButton,
    showCancelButton: configAlert.showCancelButton,
    confirmButtonColor: configAlert.confirmButtonColor,
    cancelButtonColor: configAlert.cancelButtonColor,
    confirmButtonText: configAlert.confirmButtonText,
    cancelButtonText: configAlert.cancelButtonText
  };
};

export function showModalClose() {
  MySwal.close();
}

export function showModalComponent(component, title, closeButton,width) {
  try {
    return MySwalComponent.fire(configurationComponent(title, component, closeButton,width));
  } catch (e) {
    throw new AlertConfirmException( e, "No se pudo renderizar la modal component" );
  }
}

export const configurationComponent = (title, component, closeButton,width) => {
  return {
    titleText: title,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCloseButton: closeButton === undefined ?  true: closeButton,
    showConfirmButton: false,
    width: width === undefined ? "40rem" : width,
    html: component
  };
};

export function closeModal() {
  MySwalComponent.close();
}

export function showModalLoading(title, timer = 0) {
  try {
    return Swal.fire(configurationLoading(title, timer));
  } catch (e) {
    throw new AlertConfirmException( e, "No se pudo renderizar la modal loading" );
  }
}

export const configurationLoading = (title, timer) => {
  return {
    title: '<span style="color:#000000">' + title + "</span>",
    html: '<span style="color:#000000">Espere por favor</span>',
    imageUrl: window.globalImages.loadingimag,
    timer: timer,
    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
  };
};

export function closeLoading() {
  Swal.close();
}


