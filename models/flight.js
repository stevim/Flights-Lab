import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  }
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'], 
    required: true
  },
  airport: {
    type: String, 
    enum: ['AUS','DFW','DEN','LAX','SAN'],
    required: true,
    default: 'DEN',
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
      let thisYear = new Date().getFullYear()
      let nextYear = thisYear + 1
      return new Date().setFullYear(nextYear)
    },
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}