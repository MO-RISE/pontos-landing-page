# tags (parameter_id)

The tags follow the general format:

In the MQTT topic structure: `../<entity>_<property>_<unit>/<id>`

In database/REST api: `<entity>_<property>_<unit>_<id>`

I.e the `<id>` has a separate topic level in the MQTT topic structure but is concatenated when persisted in the database and provided in the REST api.

`<entity>`, `<property>` and `<unit>` are all defined by the following list of tags, whereas `<id>` is to be replaced with an integer index starting from 1 by the data producer.

## Anemometer

### **`anemometer_aws_mps_<id>`**
Apparent wind speed (m/s).

### **`anemometer_awa_deg_<id>`**
Apparent wind angle (degrees) relative to heading.

### **`anemometer_tws_mps_<id>`**
True wind speed (m/s).

### **`anemometer_twd_deg_<id>`**
True wind direction (degrees) relative to True North.

## Ballast tanks

### **`ballasttank_level_pct_<id>`**
Fill level (precent) of ballast tank.

## Battery

### **`battery_soc_pct_<id>`**
State of charge (percent) of battery.

### **`battery_soc_kwh_<id>`**
State of charge (kWh) of battery.

### **`battery_temperature_deg_<id>`**
Temperature (deg) of battery.

## Boiler

### **`boiler_power_kw_<id>`**
Boiler power output (kW).

### **`boiler_fuelcons_lph_<id>`**
Boiler fuel consumption (litres per hour).

## Electrical bus

### `electricalbus_shorepower_kw_<id>`
Shore connection power (kW).

### `electricalbus_hotelpower_kw_<id>`
Hotel load power (kW).

## Engine - Auxilliary

### **`engineaux_speed_rpm_<id>`**
Engine speed (rpm) of auxiliary engine.

### **`engineaux_power_kw_<id>`**
Engine power output (kW) of auxilliary engine.

### **`engineaux_torque_nm_<id>`**
Engine delivered torque (Nm) of auxilliary engine.

### **`engineaux_fuelcons_lph_<id>`**
Engine fuel consumption (litres per hour) of auxilliary engine.

### **`engineaux_temperature_deg_<id>`**
Engine temperature (temperature) of auxilliary engine.

### **`engineaux_boostpressure_bar_<id>`**
Engine boost pressure (bar) of auxilliary engine.

## Engine - Main

### **`enginemain_speed_rpm_<id>`**
Engine speed (rpm) of main engine.

### **`enginemain_power_kw_<id>`**
Engine power output (kW) of main engine.

### **`enginemain_torque_nm_<id>`**
Engine delivered torque (Nm) of main engine.

### **`enginemain_fuelcons_lph_<id>`**
Engine fuel consumption (litres per hour) of main engine.

### **`enginemain_temperature_deg_<id>`**
Engine temperature (temperature) of main engine.

### **`enginemain_boostpressure_bar_<id>`**
Engine boost pressure (bar) of main engine.

## Fuel tank

### **`fueltank_level_pct_<id>`**
Level (precent) of fuel tank.

## Positioning system

### **`positioningsystem_accx_mps2_<id>`**
Acceleration along the longitudinal, body-fixed axis (m/s^2). Positive forward.

### **`positioningsystem_accy_mps2_<id>`**
Acceleration along the transverse, body-fixed axis (m/s^2). Posititive to starboard.

### **`positioningsystem_accz_mps2_<id>`**
Acceleration along the vertical, body-fixed axis (m/s^2). Positive downwards.

### **`positioningsystem_accxx_radps2_<id>`**
Angular acceleration around the longitudinal, body-fixed axis (rad/s^2). Positive starboard down.

### **`positioningsystem_accyy_radps2_<id>`**
Angular acceleration around the transverse, body-fixed axis (rad/s^2). Positive bow up.

### **`positioningsystem_acczz_radps2_<id>`**
Angular acceleration around the vertical, body-fixed axis (rad/s^2). Positive bow to starboard.

### **`positioningsystem_cog_deg_<id>`**
Course over ground (degrees) relative North.

### **`positioningsystem_heading_deg_<id>`**
Heading angle of vessel (degrees) relative North.

### **`positioningsystem_latitude_deg_<id>`**
Latitudinal position (degrees).

### **`positioningsystem_longitude_deg_<id>`**
Longitudinal position (degrees).

### **`positioningsystem_pitch_deg_<id>`**
Pitch angle of vessel (degrees). Positive bow up.

### **`positioningsystem_roll_deg_<id>`**
Roll angle of vessel (degrees). Positive starboard down.

### **`positioningsystem_rot_degpm_<id>`**
Rate of turn (degrees / minute). Positive bow to starboard.

### **`positioningsystem_sog_kn_<id>`**
Speed over ground (knots).

### **`positioningsystem_stw_kn_<id>`**
Speed through water (knots).

## Propulsor

### **`propulsor_speed_rpm_<id>`**
Rate of revolution of the propulsor (rpm).

### **`propulsor_pitch_pct_<id>`**
Pitch (percent) of the propulsor, in case of a CP propeller.

## Steering

### **`steering_angle_deg_<id>`**
Steering device angle (degrees).










