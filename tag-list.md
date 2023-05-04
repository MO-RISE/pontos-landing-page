# tags (parameter_id)

The tags follow the general format:

In the MQTT topic structure: `../<entity>_<property>_<unit>/<id>`

In database/REST api: `<entity>_<property>_<unit>_<id>`

I.e the `<id>` has a separate topic level in the MQTT topic structure but is concatenated when persisted in the database and provided in the REST api.

`<entity>`, `<property>` and `<unit>` are all defined by the following list of tags, whereas `<id>` is to be replaced with an integer index starting from 1 by the data producer.

## **`anemometer_speed_mps_<id>`**
Wind speed (m/s)

## **`anemometer_direction_deg_<id>`**
Wind direction (degrees)

## **`ballasttank_level_pct_<id>`**
Level (precent) of ballast tank

## **`battery_soc_pct_<id>`**
State of charge (percent) of battery

## **`battery_soc_kwh_<id>`**
State of charge (kWh) of battery

## **`boiler_power_kw_<id>`**
Boiler power output (kW)

## **`boiler_fuelcons_lph_<id>`**
Boiler fuel consumption (litres per hour)

## **`engineaux_speed_rpm_<id>`**
Engine speed (rpm) of auxiliary engine

## **`engineaux_power_kw_<id>`**
Engine power output (kW) of auxilliary engine

## **`engineaux_torque_nm_<id>`**
Engine delivered torque (Nm) of auxilliary engine

## **`engineaux_fuelcons_lph_<id>`**
Engine fuel consumption (litres per hour) of auxilliary engine

## **`enginemain_speed_rpm_<id>`**
Engine speed (rpm) of main engine

## **`enginemain_power_kw_<id>`**
Engine power output (kW) of main engine

## **`enginemain_torque_nm_<id>`**
Engine delivered torque (Nm) of main engine

## **`enginemain_fuelcons_lph_<id>`**
Engine fuel consumption (litres per hour) of main engine

## **`fueltank_level_pct_<id>`**
Level (precent) of fuel tank

## **`positioningsystem_accx_mps2_<id>`**
Acceleration along body-fixed x-axis (m/s^2)

## **`positioningsystem_accy_mps2_<id>`**
Acceleration along body-fixed y-axis (m/s^2)

## **`positioningsystem_accz_mps2_<id>`**
Acceleration along body-fixed z-axis (m/s^2)

## **`positioningsystem_accxx_radps2_<id>`**
Angular acceleration around body-fixed x-axis (rad/s^2)

## **`positioningsystem_accyy_radps2_<id>`**
Angular acceleration around body-fixed y-axis (rad/s^2)

## **`positioningsystem_acczz_radps2_<id>`**
Angular acceleration around body-fixed z-axis (rad/s^2)

## **`positioningsystem_cog_deg_<id>`**
Course over ground (degrees)

## **`positioningsystem_heading_deg_<id>`**
Heading angle of vessel (degrees)

## **`positioningsystem_latitude_deg_<id>`**
Latitudinal position (degrees)

## **`positioningsystem_longitude_deg_<id>`**
Longitudinal position (degrees)

## **`positioningsystem_pitch_deg_<id>`**
Pitch angle of vessel (degrees)

## **`positioningsystem_roll_deg_<id>`**
Roll angle of vessel (degrees)

## **`positioningsystem_rot_degpm_<id>`**
Rate of turn (degrees / minute)

## **`positioningsystem_sog_kn_<id>`**
Speed over ground (knots)

## **`positioningsystem_stw_kn_<id>`**
Speed through water (knots)

## **`propulsor_speed_rpm_<id>`**
Rate of revolution of the propulsor (rpm)

## **`propulsor_pitch_pct_<id>`**
Pitch (percent) of the propulsor, in case of a CP propeller.

## **`steering_angle_deg_<id>`**
Steering device angle (degrees)










