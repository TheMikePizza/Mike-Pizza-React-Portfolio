import {library} from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faHurricane,
  faPlus,
  faSquarePhone,
  faEnvelope,
  faMapMarkedAlt,
  faLock
} from "@fortawesome/free-solid-svg-icons";



const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faHurricane, faPlus, faSquarePhone, faEnvelope,
      faMapMarkedAlt,faLock)  

};

export default Icons;
