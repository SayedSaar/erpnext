frappe.provide('frappe.ui.form');

frappe.ui.form.CustomerQuickEntryForm = frappe.ui.form.QuickEntryForm.extend({
	init: function(doctype, after_insert) {
		this._super(doctype, after_insert);
	},

	render_dialog: function() {
		this.mandatory = this.mandatory.concat(this.get_variant_fields());
		this._super();
	},

	get_variant_fields: function() {
		var variant_fields = [{
			fieldtype: "Section Break",
			label: __("Primary Contact Details"),
			collapsible: 1
		},
		{
			label: __("Email Id"),
			fieldname: "email_id",
			fieldtype: "Data"
		},
		{
			fieldtype: "Column Break"
		},
		{
			label: __("Mobile Number"),
			fieldname: "mobile_no",
			fieldtype: "Data"
		},
		{
			fieldtype: "Section Break",
			label: __("Primary Address Details"),
			collapsible: 1
		},
		{
			label: __("Address Line 1"),
			fieldname: "address_line1",
			fieldtype: "Data"
		},
		{
			label: __("Address Line 2"),
			fieldname: "address_line2",
			fieldtype: "Data"
		},
		{
			label: __("ZIP Code"),
			fieldname: "pincode",
			fieldtype: "Data"
		},
		{
			fieldtype: "Column Break"
		},
		{
			label: __("City"),
			fieldname: "city",
			fieldtype: "Select",
			options: ` 
			Aáli
			Abu Al Aish
			Abu Buham
			Abu Saiba'a
			Adhari
			Adliya
			Al Aker
			Al Belad Al Qadeem
			Al Door
			Al Fatih
			Al Guraifa
			Al Hajar
			Al Hajyat
			Al Hamriya
			Al Hunaniya
			Al Jaseera
			Al Jasra
			Al Khamiss
			Al Kharjiya
			Al Lawzi
			Al Mamtala
			Al Mazrooeeah
			Al Moaaskar
			Al Muhamadyia
			Al Nasfa
			Al Omar
			Al Qarah
			Al Qareen
			Al Rawdha
			Al Riffah
			Al Romaitha
			Al Rumamin
			Al Sayh
			Al Shabak
			Al Shakhura
			Al Suqayyah
			Alcornish
			Algainah
			Alnaim
			Alqalla
			Alsalmaniya
			Alseef District
			Alsuwayfia
			Alwajeha Albhariya
			Amwaj
			Arad
			Askar
			Awali
			Bani Jamra
			Barbar
			Belaj Al Jazair
			Bu Asheera
			Bu Ghasal
			Bu Ghazal
			Bu Kuwarah
			Budaiya
			Buqwa
			Burhama
			Buri
			Busaiteen
			Commercial Area
			Daih
			Dair
			Damistan
			Dar Kulaib
			Diplomatic Area
			Diraz
			Durrat Al Bahrain
			East Riffa
			Eastern Aker
			Galali
			Gudaibiya
			Hafeera
			Halat Alnaim
			Halat Alsulta
			Hamad Town
			Hamala
			Hawrat Sanad
			Hidd
			Hidd Al Jamal
			Hillat AbdulSaleh
			Hlaitan
			Hoarat Aáli
			Hoora
			Horat Anaqa
			Isa Town
			Jabalt Hibshi
			Janabiya
			Jannusan
			Jari Al Shaikh
			Jaw
			Jazaer Beach
			Jedah
			Jid Ali
			Jidhafs
			Jind Al Haj
			Juffair
			Jurdab
			Juzur Al Dar
			Karana
			Karbabad
			Karzakan
			Khalifa Towná
			King Fahad Causway
			Lhassay
			Maameer
			Magaba
			Mahaza
			Mahooz
			Malkiya
			Mamlahat Al Mamtala
			Manama
			Manama Center
			Maqsha
			Markh
			Mazraa
			Minaa Salman Industrial Area
			Muharraq
			Murgoban
			Musala
			Nabih Saleh
			New districts
			North City
			Northern City
			Northern Sehla
			Nurana
			Nuwaydirat
			Qadam
			Qarya
			Qufool
			Quraya
			Ras Abu Jarjor
			Ras Hayan
			Ras Ruman
			Ras Zuwaid
			Riffa / Albuhair
			Saar
			Sadad
			Safriya
			Salhiya
			Salmabad
			Salman Town
			Samaheej
			Sanabis
			Sanad
			Shahrakan
			Sitra
			Sitra Industrial Area
			Souq
			Southern Sehla
			Sufala
			Sukhair
			Swayfra
			Tashan
			Trafi
			Tubli
			Um Al Naasan
			Um Albaidh
			Um Alhassam
			Um Jadir
			Umm Jidr Al Summan
			Wadi Al Sale
			Wadi Ali
			Wadyan
			West Riffa
			Western Aker
			Zallaq
			Zayed Town
			Zinj`
		},
		{
			label: __("State"),
			fieldname: "state",
			fieldtype: "Data"
		},
		{
			label: __("Country"),
			fieldname: "country",
			fieldtype: "Link",
			options: "Country"
		},
		{
			label: __("Customer POS Id"),
			fieldname: "customer_pos_id",
			fieldtype: "Data",
			hidden: 1
		}];

		return variant_fields;
	},
})