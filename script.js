new Vue({
  el: "#bmi",
  data: {
    message: "BMI calculator",
    weight: "",
    height: "",
    result: 0,
    newheight: "",
    bmi: "Body Mass Index",
    feet: "",
    inches: "",
    toFeet: false,
  },
  methods: {
    calculate() {
      let weight = parseFloat(this.weight);
      let height = parseFloat(this.height) / 100;
      this.result = parseFloat(weight / (height * height)).toFixed(1);
    },
    clearInput() {
      this.weight = "";
      this.height = "";
      this.result = 0;
      this.feet = "";
      this.inches = "";
    },
    changeUnit() {
      this.toFeet = !this.toFeet;
    },
    calculateInFeet() {
      let weight = parseFloat(this.weight);
      let newheight =
        parseFloat((Number(this.feet * 12) + Number(this.inches)) * 2.54) / 100;
      this.result = parseFloat(weight / (newheight * newheight)).toFixed(1);
    },
  },
});
