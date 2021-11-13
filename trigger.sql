DELIMITER $$
create trigger load_to_statusLoad
after insert on loads
for each row begin
		insert into status_loads(not_delivery, received, id_load) values (new.amount_load, new.amount_load, new.id_load);
end;
$$ DELIMITER ;

DELIMITER $$
create trigger statusLoad_to_load
after update on status_loads
for each row begin
	update loads set amount_delivery = new.delivery, amount_not_delivery = new.not_delivery where loads.id_load = old.id_load;
end;
$$ DELIMITER ;

DELIMITER $$
create trigger loads_to_supplier
after update on loads
for each row begin
	declare varAmount integer;
    select sum(amount_delivery) into varAmount from loads where id_supplier = old.id_supplier;
	update suppliers set total_amount = varAmount where suppliers.id_supplier = old.id_supplier;
end;
$$ DELIMITER ;

DELIMITER $$
create trigger loads_to_driver
after update on loads
for each row begin
	declare varAmount integer;
    select sum(amount_delivery) into varAmount from loads where rut_driver = old.rut_driver;
	update drivers set total_load = varAmount where drivers.rut = old.rut_driver;
end;
$$ DELIMITER ;

DELIMITER $$
create trigger finances_to_statusSupplier
after insert on financessuppliers
for each row begin
	update suppliers set statusSupplier=true where suppliers.id_supplier = new.id_supplier;
end;
$$ DELIMITER ;

DELIMITER $$
create trigger load_to_financesSupplier
after update on loads
for each row begin
declare varAmount integer;
    select sum(amount_delivery) into varAmount from loads where id_supplier = old.id_supplier;
	update financessuppliers set benefitEmpresa = (financessuppliers.costEmpresa*varAmount) where financessuppliers.id_supplier = old.id_supplier;
end;
$$ DELIMITER ;

INSERT INTO roles VALUES (1, 'user',now(), now());
INSERT INTO roles VALUES (2, 'moderator',now(), now());
INSERT INTO roles VALUES (3, 'admin',now(), now());