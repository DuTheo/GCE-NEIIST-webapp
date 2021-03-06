import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterResults'
})
export class FilterResultsPipe implements PipeTransform {

    transform(items: any[], value: string, areas: string[],types: string[]): any[] {
        items = this.filterAreas(items,areas);
        items = this.filterType(items,types);
        if (!items) return [];
        if (!value) return  items;
        if (value == '' || value == null) return [];
        return items.filter(e => e.title.toLowerCase().indexOf(value.toLowerCase()) > -1 || e.requirements.toLowerCase().indexOf(value.toLowerCase()) > -1 || e.objectives.toLowerCase().indexOf(value.toLowerCase()) > -1 || e.observations.toLowerCase().indexOf(value.toLowerCase()) > -1);

    }

    filterAreas(theses: any[], areas: string[]){
        let size = areas.length;
        if (size == 0)
            return theses;
        if (size == 1){
            return theses.filter(e => e.areas.indexOf(areas[0])> -1)
        }
        if (size == 2){
            return theses.filter(e => e.areas.indexOf(areas[0])> -1 && e.areas.indexOf(areas[1])> -1 )
        }
    }

    filterType(theses: any[],types: string[]){
        if(types.length == 1){
            return theses.filter(e => e.type==types[0])
        }
            return theses;
    }

}
