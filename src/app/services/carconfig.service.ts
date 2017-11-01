import { Injectable }    from '@angular/core';

@Injectable()
export class CarConfig {

// --- START CAR CONFIGURATION ---

  makes = [
    {label:'<Choose>', value:''},
    {label:'BMW', value: 'BMW'},
    {label:'Chevrolet', value: 'Chevrolet'},
    {label:'Nissan', value: 'Nissan'},
    {label:'Renault', value: 'Renault'},
    {label:'Tesla', value: 'Tesla'}//,
 //   {label:'Volkswagen', value: 'Volkswagen'}
  ]

  models = {
    "BMW": [
        {label:'<Choose Model>', value:''},
        {label:'i3', value: 'i3'},
        {label:'i8', value: 'i8'}
    ],
    "Chevrolet": [
        {label:'<Choose Model>', value:''},
        {label:'Bolt', value: 'Bolt'}
    ],
    "Nissan": [
        {label:'<Choose Model>', value:''},
        {label:'Leaf 2013', value: 'Leaf 2013'},
        {label:'Leaf 2018', value: 'Leaf 2018'}
      ],
    "Renault": [
        {label:'<Choose Model>', value:''},
        {label:'Zoe', value: 'Zoe'}
    ],
    "Tesla": [
        {label:'<Choose Model>', value:''},
        {label:'Model S', value: 'Model S'},
        {label:'Model X', value: 'Model X'},
        {label:'Model 3', value: 'Model 3'}
    ]//,
    // "Volkswagen": [
    //     {label:'<Choose Model>', value:''},
    //     {label:'e-Golf', value: 'e-Golf'}
    // ]
  }
  
  images = {
    "BMW": {
        "i3": [
            {label:'i3 White', value:'bmw_i3_white'}
        ],
        "i8": [
            {label:'i8 White', value:'bmw_i8_white'}
        ]
    },
    "Chevrolet": {
        "Bolt": [
            {label:'Bolt', value:'chevy_bolt_arctic_blue'}
        ]
    },
    "Nissan": {
        "Leaf 2013": [
            {label:'Leaf', value:'nissan_leaf_blue'}
        ],
        "Leaf 2018": [
            {label:'Leaf', value:'nissan_leaf2018_white'}
        ]
    },
    "Renault": {
        "Zoe": [
            {label:'Zoe Blue', value:'renault_zoe_blue'}
        ]
    },
    "Tesla": {
        "Model 3": [
            {label:'Model 3 White Aero',  value:'tesla_model3_white_aero'},
            {label:'Model 3 Black Aero',  value:'tesla_model3_black_aero'},
            {label:'Model 3 Blue Aero',  value:'tesla_model3_blue_aero'},
            {label:'Model 3 Signature Red Aero',  value:'tesla_model3_red_aero'},
            {label:'Model 3 Gray Aero',  value:'tesla_model3_gray_aero'},
            {label:'Model 3 Midnight Gray Aero',  value:'tesla_model3_midgray_aero'},
            {label:'Model 3 White 19"',  value:'tesla_model3_white_19'},
            {label:'Model 3 Black 19"',  value:'tesla_model3_black_19'},
            {label:'Model 3 Blue 19"',  value:'tesla_model3_blue_19'},
            {label:'Model 3 Signature Red 19"',  value:'tesla_model3_red_19'},
            {label:'Model 3 Gray 19"',  value:'tesla_model3_gray_19'},
            {label:'Model 3 Midnight Gray 19"',  value:'tesla_model3_midgray_19'}
        ],
        "Model S": [
          {label:'Model S Black',  value:'tesla_models_black_19'},
          {label:'Model S Midnight Silver',  value:'tesla_models_midnight_19'},
          {label:'Model S Deep Blue',  value:'tesla_models_blue_19'},
          {label:'Model S Silver',  value:'tesla_models_silver_19'},
          {label:'Model S Pearl White',  value:'tesla_models_white_19'},
          {label:'Model S Red',  value:'tesla_models_red_19'}
        ],
        "Model X": [
          {label:'Model X Black',  value:'tesla_modelx_black_19'},
          {label:'Model X Midnight Silver',  value:'tesla_modelx_midnight_19'},
          {label:'Model X Deep Blue',  value:'tesla_modelx_blue_19'},
          {label:'Model X Silver',  value:'tesla_modelx_silver_19'},
          {label:'Model X White',  value:'tesla_modelx_white_19'},
          {label:'Model X Red',  value:'tesla_modelx_red_19'}
      ]
    }
  }
// --- END CAR CONFIGURATION ---
}
