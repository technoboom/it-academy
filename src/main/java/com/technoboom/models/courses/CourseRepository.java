package com.technoboom.models.courses;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/6/17
 * Time: 5:20 PM
 * Project: ITAcademy
 * Package: com.technoboom.models.courses
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
public interface CourseRepository extends CrudRepository<Course, Long> {
}