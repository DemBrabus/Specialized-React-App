import React from 'react';
import './ItemSpecs.scss';

export default function ItemSpecs() {
    return (
        <div className='ItemSpecs'>
            <div className='ItemSpecs-Wrap'>
                <div className='ItemSpecs-LeftColumn'>
                    <div className='ItemSpecs-DownloadManuals'>
                        <p className='ItemSpecs-ManualsTitle'>MANUAL DOWNLOADS</p>
                        <div className='ItemSpecs-ManualsWrap'>
                            <p className='ItemSpecs-Manuals'>Specialized Bike Owners Manual</p>
                            <p className='ItemSpecs-Manuals'>DODATEK - POUŽITÍ TRENAŽÉRU</p>
                            <p className='ItemSpecs-Manuals'>Specialized Bicycle Owner's Manual Addendum: Riding With Kids</p>
                            <p className='ItemSpecs-Manuals'>Specialized Bicycle Owner's Manual (English)</p>
                            <p className='ItemSpecs-Manuals'>Specialized Suspension Calculator</p>
                            <p className='ItemSpecs-Manuals'>2019 Rider/Bike Weight Limits and Terrain Conditions</p>
                            <p className='ItemSpecs-Manuals'>Specialized Ride App (Android)</p>
                            <p className='ItemSpecs-Manuals'>Roval Road and Mountain Wheelsets</p>
                        </div>
                    </div>
                </div>
                <div className='ItemSpecs-RightColumn'>
                    <p className='ItemSpecs-Title'>TECHNICAL SPECIFICATIONS</p>

                    <div className='ItemSpecs-TableHeaderRow'>
                        <p className='ItemSpecs-TableHeader'>DRIVETRAIN</p>
                    </div>
                    <table className='ItemSpecs-Table'>
                         <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>BOTTOM BRACKET</td>
                            <td className='ItemSpec-TableData'>SRAM GXP</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>CHAIN</td>
                            <td className='ItemSpec-TableData'>SRAM GX Eagle, 12-speed</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>CRANKSET</td>
                            <td className='ItemSpec-TableData'>	Truvativ Descendant, aluminum, Boost™ 148, 170mm crankarm, 24mm spindle</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>SHIFT LEVERS</td>
                            <td className='ItemSpec-TableData'>SRAM GX Eagle, trigger, 12-speed</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>CASSETTE</td>
                            <td className='ItemSpec-TableData'>SRAM GX Eagle, 12-speed, 10-50t</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>CHAINRINGS</td>
                            <td className='ItemSpec-TableData'>	Steel, 30T</td>
                        </tr>
                    </table>

                    <div className='ItemSpecs-TableHeaderRow'>
                        <p className='ItemSpecs-TableHeader'>SUSPENSION</p>
                    </div>
                    <table className='ItemSpecs-Table'>
                         <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>FORK</td>
                            <td className='ItemSpec-TableData'>FOX FLOAT 36 Factory, GRIP2 damper, Kashima Coating, 15x110mm, 51mm offset, 150mm of travel</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>REAR SHOCK</td>
                            <td className='ItemSpec-TableData'>FOX FLOAT DPX2 Factory, Rx Trail Tune, EVOL Air sleeve, Kashima coat, 3-position adjustment w/ Open Mode adjustment, 210x50mm</td>
                        </tr>
                    </table>

                    <div className='ItemSpecs-TableHeaderRow'>
                        <p className='ItemSpecs-TableHeader'>COCKPIT</p>
                    </div>
                    <table className='ItemSpecs-Table'>
                         <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>SADDLE</td>
                            <td className='ItemSpec-TableData'>Body Geometry Phenom Comp, hollow Cr-Mo rails, 143mm</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>SEAT BINDER</td>
                            <td className='ItemSpec-TableData'>	Specialized bolt-type, alloy, 38.6mm</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>SEATPOST</td>
                            <td className='ItemSpec-TableData'>Command Post IRcc, 16-position micro-height adjustable, two-bolt head, bottom mount cable routing, remote SRL lever, 34.9mm, S: 130mm, M/L/XL: 160mm of travel</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>HANDLEBARS</td>
                            <td className='ItemSpec-TableData'>Specialized Trail, 7050 alloy, 8-degree backsweep, 6-degree upsweep, 27mm rise, 780mm, 31.8mm clamp</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>STEM</td>
                            <td className='ItemSpec-TableData'>Specialized Trail, forged alloy, 4-bolt, 5mm rise</td>
                        </tr>
                    </table>

                    <div className='ItemSpecs-TableHeaderRow'>
                        <p className='ItemSpecs-TableHeader'>WHEELS & TIRES</p>
                    </div>
                    <table className='ItemSpecs-Table'>
                         <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>FRONT HUB</td>
                            <td className='ItemSpec-TableData'>	Specialized, sealed cartridge bearings, 15x110mm spacing, 28h</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>REAR HUB</td>
                            <td className='ItemSpec-TableData'>	DT Swiss 350, Star Ratchet, 36t engagement, SRAM XD driver body, 12mm thru-axle, 148mm spacing, 28h</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>INNER TUBES</td>
                            <td className='ItemSpec-TableData'>Standard, Presta valve</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>SPOKES</td>
                            <td className='ItemSpec-TableData'>DT Swiss Industry</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>RIMS</td>
                            <td className='ItemSpec-TableData'>Roval Traverse Carbon 29, hookless carbon, 30mm inner width, hand-built 2Bliss Ready, 28h</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>FRONT TIRE</td>
                            <td className='ItemSpec-TableData'>Butcher, GRID casing, GRIPTON® compound, 2Bliss Ready, 29x2.6"</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>REAR TIRE</td>
                            <td className='ItemSpec-TableData'>Purgatory, GRID casing, GRIPTON® compound, 2Bliss ready, 29 x2.6"</td>
                        </tr>
                    </table>

                    <div className='ItemSpecs-TableHeaderRow'>
                        <p className='ItemSpecs-TableHeader'>BRAKES</p>
                    </div>
                    <table className='ItemSpecs-Table'>
                         <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>FRONT BRAKE</td>
                            <td className='ItemSpec-TableData'>SRAM Guide RS, hydraulic disc, organic pads, Guide S4 4-piston caliper, 200mm rotor</td>
                        </tr>
                        <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>REAR BRAKE</td>
                            <td className='ItemSpec-TableData'>SRAM Guide RS, hydraulic disc, organic pads, Guide S4 4-piston caliper, 180mm rotor</td>
                        </tr>
                    </table>

                    <div className='ItemSpecs-TableHeaderRow'>
                        <p className='ItemSpecs-TableHeader'>ACCESSORIES</p>
                    </div>
                    <table className='ItemSpecs-Table'>
                         <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>PEDALS</td>
                            <td className='ItemSpec-TableData'>Specialized Dirt</td>
                        </tr>
                    </table>

                    <div className='ItemSpecs-TableHeaderRow'>
                        <p className='ItemSpecs-TableHeader'>FRAMESET</p>
                    </div>
                    <table className='ItemSpecs-Table'>
                         <tr className='ItemSpecs-TableRow'>
                            <td className='TableData-Main'>FRAME</td>
                            <td className='ItemSpec-TableData'>FACT 11m, full carbon chassis and rear-end, asymmetrical design, 29 Trail Geometry, SWAT™ Door integration, threaded BB, fully enclosed internal cable routing, 12x148mm dropouts, sealed cartridge bearing pivots, replaceable derailleur </td>
                        </tr>
                    </table>

                        <p className='ItemSpecs-Disclaimer'>* Specifications are subject to change without notice</p>

                
                </div>

            </div>
        </div>
    )
}
