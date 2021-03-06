import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import EntrarPage from "./pages/EntrarPage";
import PerfilPage from "./pages/PerfilPage";
import AdministrarConvenios from "./pages/AdministrarConvenios";
import CrearconvenioPage from "./pages/CrearconvenioPage";
import AdminPage from "./pages/AdminPage";
import PagosPage from "./pages/PagosPage";
import PagoAfiliadosPage from "./pages/PagoAfilliadosPage";
import FormularioAfiliate from "./pages/FormularioAfiliate";
import PagoAsociacionPage from "./pages/PagoAsociacionPage";
import PagoBonosPage from "./pages/pagoBonosPage";
import PagoPrestamosPage from "./pages/pagoPrestamosPage";
import Buscarconvenios from './pages/Buscarconvenios';
import BonosAfiliadoPage from './pages/BonosAfiliadoPage';
import PagosUsuarioPage from './pages/PagosUsuarioPage';
import MisConvenios from './pages/MisConvenios';
import AdmAfiliados from "./pages/AdmAfiliados";
import AdministracionAfiliados from "./pages/AdministracionAfiliados";



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* Pagina Principal */}
        <Route path="/" component={Home} exact />
        <Route path="/formularioAfiliate" component={FormularioAfiliate} exact />
        <Route path="/entrar" component={EntrarPage} exact />
        
        {/* Paginas del usuario */}
        <Route path="/perfil" component={PerfilPage} exact />
        <Route path='/buscarconvenios' component={Buscarconvenios} exact />
        <Route path='/MisConvenios' component={MisConvenios} exact />
        <Route path="/pagosUsuario" component={PagosUsuarioPage} exact />
        <Route path="/bonosAfiliado" component={BonosAfiliadoPage} exact />

        {/* Paginas del administrador */}
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/pagos" component={PagosPage} exact />
        <Route path="/pagoAfiliados" component={PagoAfiliadosPage} exact />
        <Route path="/pagoAsociacion" component={PagoAsociacionPage} exact />
        <Route path="/pagoBonos" component={PagoBonosPage} exact />
        <Route path="/pagoPrestamos" component={PagoPrestamosPage} exact />
        <Route path="/AdministrarConvenios" component={AdministrarConvenios} exact />
        <Route path='/CrearConvenio' component={CrearconvenioPage} exact />
        <Route path="/AdmAfiliados" component={AdmAfiliados} exact />
        <Route path="/AdministracionAfiliados" component={AdministracionAfiliados} exact />
        
      </Switch>
    </Router>
  );
}

export default App;
