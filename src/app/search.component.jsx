import React, {Component} from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <search>
        <form action="#" className="autocomplete" autoComplete="off">
          <div className="autocomplete-input">
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            <span className="autocomplete-tip">What do you want?</span>
          </div>
          <p className="autocomplete-message">Didn't found any results</p>
          <ul className="autocomplete-list">
            <li>Ekonomista</li>
            <li>Prawnik</li>
            <li>Telemarketer</li>
            <li>Bloger</li>
            <li>Programista webowy</li>
            <li>Projektant graficzny</li>
            <li>Projektant UX</li>
            <li>Tester oprogramowania</li>
            <li>Mendżer projektu</li>
            <li>Programista front-end</li>
            <li>Programista back-end</li>
            <li>Programista Wordpress</li>
            <li>Programista PHP</li>
            <li>Mendżer produktu</li>
            <li>Specjalista ds. PR</li>
            <li>Rekruter</li>
            <li>Inżynier środowiska</li>
            <li>Specjalista ds. reklamy</li>
            <li>Copywriter</li>
            <li>Architekt wnętrz</li>
            <li>Tester aplikacji</li>
            <li>Dietetyk</li>
            <li>Spedytor</li>
            <li>Pedagog</li>
            <li>Specjalista ds. BHP</li>
            <li>Koordynator sprzedaży</li>
            <li>Pilot wycieczek</li>
            <li>Agent nieruchomości</li>
            <li>Doradca techniczno-handlowy</li>
            <li>Rzeczoznawca</li>
            <li>Radca prawny</li>
            <li>Kierownik magazynu</li>
            <li>Kierownik punktu sprzedaży</li>
            <li>Lektor</li>
            <li>Tłumacz</li>
            <li>Farmaceuta</li>
            <li>Analityk systemów</li>
            <li>Nauczyciel</li>
            <li>Fakturzystka</li>
            <li>Doradca zawodowy</li>
            <li>Asystentka zarządu</li>
            <li>Księgowa</li>
            <li>Szef kuchni</li>
            <li>Zawodowy gracz komputerowy</li>
            <li>Konsultant SAP</li>
            <li>Astrofizyk</li>
            <li>Chemik – technologia chemiczna</li>
            <li>Ogrodnik</li>
            <li>Operator dźwięku</li>
            <li>Barista</li>
            <li>Grafik komputerowy DTP</li>
            <li>Genetyk</li>
            <li>Realizator dźwięku</li>
            <li>Etnograf</li>
            <li>Zegarmistrz</li>
            <li>Urbanista</li>
            <li>Makler giełd towarowych</li>
            <li>Złotnik-jubiler</li>
            <li>Reżyser filmowy</li>
          </ul>
        </form>
      </search>
    );
  }
}

export default NameForm;
